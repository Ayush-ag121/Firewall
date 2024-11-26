import React,{useState,useEffect, useContext} from 'react'
import axios from 'axios';
import Context from '../../context/context';
const API_BASE_URL = "http://127.0.0.1:5000/api";
export default function Allow_All_Deny_ports(){
  let {setRender,render} = useContext(Context)
    const [denyPorts, setDenyPorts] = useState([]);
    const [portToDeny, setPortToDeny] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
  
    // Fetch denied ports
    const fetchDenyPorts = async () => {
      try {
        let set = new Set()
        let response = await fetch('http://127.0.0.1:5000/api/list-deny-ports', {
            method: 'GET',
          });
          response = await response.json()
          for(let i of response.deny_ports){
           i!=="Anywhere" &&  set.add(i)
          }
          let arr = []
          for(let i of set){
            arr.push(i)
          }
          console.log(arr)
        setDenyPorts(arr || []);
      } catch (err) {
        console.log(err)
        setError("Failed to fetch denied ports.");
      }
    };
  
    // Allow all ports
    const allowAllPorts = async () => {

      try {
        const response = await axios.post(`${API_BASE_URL}/allow-all-ports`);
        setMessage(response.data.message);
        fetchDenyPorts();
      } catch (err) {
        setError("Failed to allow all ports.");
      }
      
      setTimeout(()=>setRender(value=>value+1),1000)
    };
    useEffect(()=>{
      setInterval(()=>setMessage(''),10000)
    },[message])
    // Deny a specific port
    const denyPort = async () => {
      try {
        const response = await axios.post(`${API_BASE_URL}/deny-port`, { port: portToDeny });
        setMessage(response.data.message);
       
        fetchDenyPorts();
      } catch (err) {
        setError("Failed to deny the port.");
      }
      setTimeout(()=>setRender(value=>value+1),1000)

    };
  
    useEffect(() => {
      fetchDenyPorts();
    }, [render]);
  
    return (
      <div className="port-manager bg-white flex flex-col " >
        <div>
          {message && <div className="message">{message}</div>}
          {error && <div className="error">{error}</div>}
        </div>
  
        <div>
          <h2 style={{fontsize:"30px"}}>Denied Ports</h2>
          <ul className='flex flex-col gap-[10px] '>
            {denyPorts.length > 0 ? (
              denyPorts.map((port, index) => <li key={index}>{port}</li>)
            ) : (
              <p style={{fontsize:"30px",textAlign:"center"}}>No denied ports found.</p>
            )}
          </ul>
        </div>
  
        <div className="actions m-auto bg-[white]">
          <button onClick={allowAllPorts}>Allow All Ports</button>
        </div>
  
        <div className="flex flex-row justify-center items-center bg-[white]">
          <input
            type="text"
            placeholder="Enter port to deny"
            value={portToDeny}
            onChange={(e) => setPortToDeny(e.target.value)}
          />
          <button onClick={denyPort}>Deny Port</button>
        </div>
      </div>
    );
}
import React,{useState,useEffect} from 'react'
import axios from 'axios';
const API_BASE_URL = "http://127.0.0.1:5000/api";
export default function Allow_All_Deny_ports(){
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
            set.add(i)
          }
          let arr = new Array(set)
          console.log(response)
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
    };
  
    // Deny a specific port
    const denyPort = async () => {
      try {
        const response = await axios.post(`${API_BASE_URL}/deny-port`, { port: portToDeny });
        setMessage(response.data.message);
        fetchDenyPorts();
      } catch (err) {
        setError("Failed to deny the port.");
      }
    };
  
    useEffect(() => {
      fetchDenyPorts();
    }, []);
  
    return (
      <div className="port-manager">
        <h1>Port Manager</h1>
        <div>
          {message && <div className="message">{message}</div>}
          {error && <div className="error">{error}</div>}
        </div>
  
        <div>
          <h2>Denied Ports</h2>
          <ul>
            {denyPorts.length > 0 ? (
              denyPorts.map((port, index) => <li key={index}>{port}</li>)
            ) : (
              <p>No denied ports found.</p>
            )}
          </ul>
        </div>
  
        <div className="actions">
          <button onClick={allowAllPorts}>Allow All Ports</button>
        </div>
  
        <div className="deny-port-form">
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
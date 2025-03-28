import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Block_specific_ip() {
    const [ip, setIp] = useState('');
    const [response, setResponse] = useState('');
    const [error, setError] = useState('');
    const [isRange, setIsRange] = useState(false);
  
    const handleBlockIp = async () => {
      setResponse('');
      setError('');
      let single_regex = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
      let range_regex =  /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\/([12]?[0-9]|3[0-2])$/;
      if(isRange){
        if(!range_regex.test(ip)){
          toast.error("Please Enter Valid IP Range")
                return
        }
      }else{
        if(!single_regex.test(ip)){
          toast.error("Please Enter Valid IP")
                return 
        }
      }
      const endpoint = isRange ? '/api/block-ip-third' : '/api/block-ip-single';
  
      try {
        const res = await axios.post(`http://127.0.0.1:5000${endpoint}`, { ip });
        setResponse(res.data.message);
      } catch (err) {
        setError(err.response?.data?.error || 'An error occurred');
      }
    };
  
    return (
      <div className="App flex" style={{display:"flex",gap:"20px",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
        <h1 style={{marginTop:"0px"}}> Single IP Blocker</h1>
        <div>
          <input
            type="text"
            placeholder={isRange ? "Enter IP range" : "Enter single IP"}
            value={ip}
            onChange={(e) => setIp(e.target.value)}
          />
          <button onClick={handleBlockIp}>Block IP</button>
        </div>
        {response && <p className="success">{response}</p>}
        {error && <p className="error">{error}</p>}
      </div>
    );
}

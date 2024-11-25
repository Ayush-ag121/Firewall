import React,{useState,useEffect} from 'react'
import axios from 'axios';
export default function Block_specific_ip() {
    const [ip, setIp] = useState('');
    const [response, setResponse] = useState('');
    const [error, setError] = useState('');
    const [isRange, setIsRange] = useState(false);
  
    const handleBlockIp = async () => {
      setResponse('');
      setError('');
  
      const endpoint = isRange ? '/block-ip' : '/block-ip-single';
  
      try {
        const res = await axios.post(`http://127.0.0.1:5000${endpoint}`, { ip });
        setResponse(res.data.message);
      } catch (err) {
        setError(err.response?.data?.error || 'An error occurred');
      }
    };
  
    return (
      <div className="App">
        <h1>IP Blocker</h1>
        <div>
          <input
            type="text"
            placeholder={isRange ? "Enter IP range" : "Enter single IP"}
            value={ip}
            onChange={(e) => setIp(e.target.value)}
          />
          <button onClick={handleBlockIp}>Block IP</button>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={isRange}
              onChange={() => setIsRange(!isRange)}
            />
            Block IP Range
          </label>
        </div>
        {response && <p className="success">{response}</p>}
        {error && <p className="error">{error}</p>}
      </div>
    );
}

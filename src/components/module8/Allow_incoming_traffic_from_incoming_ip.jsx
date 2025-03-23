import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Allow_incoming_traffic_from_incoming_ipAllowIP = () => {
  const [ip, setIP] = useState('');
  const [message, setMessage] = useState('');

  const handleAllowIP = async () => {
    const ipAddressRegex = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    if(!ipAddressRegex.test(ip)){
      toast.error("Please Enter Valid IP")
            return
    }
    try {
      const response = await axios.post('http://localhost:5000/allow-ip-module8', { ip });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || "An error occurred.");
    }
  };

  return (
    <div style={{marginBottom:"50px"}}>
      <h2 style={{fontSize:"20px"}}>Allow Incoming Traffic from a Specific IP Address</h2>
      <div style={{display:"flex",justifyContent:"center"}} >

      <label>
        IP Address:
        <input
          type="text"
          value={ip}
          onChange={(e) => setIP(e.target.value)}
          placeholder="Enter IP Address (e.g., 192.168.1.1)"
        />
      </label>
      <button onClick={handleAllowIP}>Allow IP</button>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Allow_incoming_traffic_from_incoming_ipAllowIP;

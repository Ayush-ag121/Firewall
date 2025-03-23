import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Deny_incoming_traffic_from_specific_ip_address = () => {
  const [ipAddress, setIpAddress] = useState('');
  const [message, setMessage] = useState('');

  const handleDenyIP = async () => {
    const ipAddressRegex = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    if(!ipAddressRegex.test(ipAddress)){
      toast.error("Please Enter Valid IP Address")
            return
    }
    try {
      const response = await axios.post('http://localhost:5000/deny-ip-module8', { ip_address: ipAddress });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || 'An error occurred.');
    }
  };

  return (
    <div style={{marginBottom:"30px"}}>
      <h2 style={{fontSize:"20px"}}>Deny Incoming Traffic from a Specific IP Address</h2>
     <div style={{display:"flex",justifyContent:"center"}} >

      <label>
        IP Address:
        <input
          type="text"
          value={ipAddress}
          onChange={(e) => setIpAddress(e.target.value)}
          placeholder="Enter IP Address"
        />
      </label>
      <button onClick={handleDenyIP}>Deny IP</button>
     </div>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Deny_incoming_traffic_from_specific_ip_address;

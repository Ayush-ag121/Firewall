import React, { useState } from 'react';
import axios from 'axios';

const Deny_incoming_traffic_from_specific_ip_address = () => {
  const [ipAddress, setIpAddress] = useState('');
  const [message, setMessage] = useState('');

  const handleDenyIP = async () => {
    try {
      const response = await axios.post('http://localhost:5000/deny-ip-module8', { ip_address: ipAddress });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || 'An error occurred.');
    }
  };

  return (
    <div>
      <h2>Deny Incoming Traffic from a Specific IP Address</h2>
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
      {message && <p>{message}</p>}
    </div>
  );
};

export default Deny_incoming_traffic_from_specific_ip_address;

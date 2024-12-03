import React, { useState } from 'react';
import axios from 'axios';

const Allow_incoming_traffic_from_incoming_ipAllowIP = () => {
  const [ip, setIP] = useState('');
  const [message, setMessage] = useState('');

  const handleAllowIP = async () => {
    try {
      const response = await axios.post('http://localhost:5000/allow-ip-module8', { ip });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || "An error occurred.");
    }
  };

  return (
    <div>
      <h2>Allow Incoming Traffic from a Specific IP Address</h2>
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
      {message && <p>{message}</p>}
    </div>
  );
};

export default Allow_incoming_traffic_from_incoming_ipAllowIP;
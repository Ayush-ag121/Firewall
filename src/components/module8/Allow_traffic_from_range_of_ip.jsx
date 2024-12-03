import React, { useState } from 'react';
import axios from 'axios';

const Allow_traffic_from_range_of_ip = () => {
  const [ipRange, setIpRange] = useState('');
  const [message, setMessage] = useState('');

  const handleAllowSubnet = async () => {
    try {
      const response = await axios.post('http://localhost:5000/allow-subnet', { ip_range: ipRange });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || 'An error occurred.');
    }
  };

  return (
    <div>
      <h2>Allow Traffic from a Subnet or Range of IP Addresses</h2>
      <label>
        IP Range/Subnet (e.g., 192.168.1.0/24 or 192.168.1.1-192.168.1.255):
        <input
          type="text"
          value={ipRange}
          onChange={(e) => setIpRange(e.target.value)}
          placeholder="Enter IP Range or Subnet"
        />
      </label>
      <button onClick={handleAllowSubnet}>Allow Subnet</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Allow_traffic_from_range_of_ip;

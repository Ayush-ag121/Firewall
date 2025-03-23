import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Allow_traffic_from_range_of_ip = () => {
  const [ipRange, setIpRange] = useState('');
  const [message, setMessage] = useState('');

  const handleAllowSubnet = async () => {
    const ipRangeSubnetRegex = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\/([12]?[0-9]|3[0-2])$/;
    if(!ipRangeSubnetRegex.test(ipRange)){
      toast.error("Please Enter Valid IP Range" )
            return 
    }
    try {
      const response = await axios.post('http://localhost:5000/allow-subnet', { ip_range: ipRange });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || 'An error occurred.');
    }
  };

  return (
    <div style={{marginBottom:"50px"}}>
      <h2 style={{fontSize:"20px"}}>Allow Traffic from a Subnet or Range of IP Addresses</h2>
      <div style={{display:"flex",justifyContent:"center"}} >

      <label>
        IP Range/Subnet 
        <input
          type="text"
          value={ipRange}
          onChange={(e) => setIpRange(e.target.value)}
          placeholder="Enter IP Range or Subnet"
        />
      </label>
      <button onClick={handleAllowSubnet}>Allow Subnet</button>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Allow_traffic_from_range_of_ip;

import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function Ipv6_Support() {
  const [ipv6Value, setIpv6Value] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleUpdateIPv6 = async () => {
    let regex = /^(yes|no)$/i;
    if(!regex.test(ipv6Value)){
      toast.error("Please Enter Valid IP")
            return
    }
    try {
      const response = await axios.post('http://127.0.0.1:5000/update-ipv6', {
        value: ipv6Value,
      });
      setResponseMessage(response.data.message || 'Updated successfully');
    } catch (error) {
      setResponseMessage(error.response?.data?.message || 'Failed to update');
    }
  };

  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1 style={{fontSize:"30px"}}> IPv6 Configuration</h1>

      <label>
        Enter New IPv6 Value:
        <input
          type="text"
          value={ipv6Value}
          placeholder='yes/no'
          onChange={(e) => setIpv6Value(e.target.value)}
          style={{ marginLeft: '10px' }}
        />
      </label>
      <button onClick={handleUpdateIPv6} style={{ marginLeft: '10px' }}>
        Update IPv6
      </button>

      <h2>Response:</h2>
      <pre>{responseMessage}</pre>
    </div>
  );
}

export default Ipv6_Support;

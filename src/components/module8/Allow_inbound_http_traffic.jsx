import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function Allow_inbound_http_traffic() {
  const [port, setPort] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e) => {

    e.preventDefault();
    const portNumberRegex = /^(6553[0-5]|655[0-2][0-9]{2}|65[0-4][0-9]{3}|6[0-4][0-9]{4}|[1-9][0-9]{0,3})$/;
    if(!portNumberRegex.test(port)){
      toast.error("Please Enter Valid Port")
            return
    }
    try {
      const response = await axios.post('http://localhost:5000/allow-http-port', { port });
      setResponseMessage(response.data.message);
    } catch (error) {
      setResponseMessage(error.response?.data?.message || 'Error while setting the port.');
    }
  };

  return (
    <div style={{ padding: '20px',marginBottom:"30px" }}>
      <h2 style={{fontSize:"20px"}}>Allow Inbound HTTP Traffic</h2>
      <form style={{display:"flex",justifyContent:"center"}} onSubmit={handleSubmit}>
        <label>
          Port Number:
          <input
            type="text"
            value={port}
            onChange={(e) => setPort(e.target.value)}
            required
            style={{ marginLeft: '10px' }}
          />
        </label>
        <button type="submit" style={{ marginLeft: '10px' }}>Allow Port</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
}

export default Allow_inbound_http_traffic;

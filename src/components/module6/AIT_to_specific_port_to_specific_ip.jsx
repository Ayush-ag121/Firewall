import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function AIT_to_specific_port_from_specific_ip() {
  const [port, setPort] = useState('');
  const [ip, setIp] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleAllowPortIP = async () => {
    const ipAddressRegex = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    const portNumberRegex = /^(6553[0-5]|655[0-2][0-9]{2}|65[0-4][0-9]{3}|6[0-4][0-9]{4}|[1-9][0-9]{0,3})$/;
    if(!ipAddressRegex.test(ip) || !portNumberRegex.test(port)){
      toast.error("Please Enter Valid IP or Port")
            return
    }
    try {
      const response = await axios.post('http://127.0.0.1:5000/allow-port-ip', {
        port: port,
        ip: ip,
      });
      if (response.data.success) {
        setResponseMessage(response.data.message);
        setErrorMessage('');
      } else {
        setErrorMessage(response.data.error);
        setResponseMessage('');
      }
    } catch (error) {
      setErrorMessage('Failed to allow IP on port.');
      setResponseMessage('');
    }
  };

  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1 style={{fontSize:"30px"}}>Allow Incoming Traffic on Specific Port from Specific IP</h1>

      <div style={{display:"flex",gap:"30px",flexDirection:"row",justifyContent:"center",alignItems:"center"}}  className='w-[100%] flex flex-col items-center mt-[30px] gap-[40px]'>
        <label>Enter IP Address: </label>
        <input
          type="text"
          value={ip}
          onChange={(e) => setIp(e.target.value)}
          placeholder="IP address"
          style={{ marginLeft: '10px' }}
        />
      </div>

      <div style={{display:"flex",gap:"30px",flexDirection:"row",justifyContent:"center",alignItems:"center"}}  className='w-[100%] flex flex-col items-center mt-[30px] gap-[40px]'>
        <label>Enter Port Number: </label>
        <input
          type="text"
          value={port}
          onChange={(e) => setPort(e.target.value)}
          placeholder="Port number"
          style={{ marginLeft: '10px' }}
        />
      <button onClick={handleAllowPortIP} style={{ marginTop: '10px' }}>
        Allow Port
      </button>
      </div>


      {responseMessage && <p style={{ color: 'green' }}>{responseMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
}

export default AIT_to_specific_port_from_specific_ip;

import React, { useState } from 'react';
import axios from 'axios';

function EnableDisable() {
  const [ufwStatus, setUfwStatus] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const enableUFW = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/ufw-enable');
      setResponseMessage(response.data.result);
    } catch (error) {
      setResponseMessage('Failed to enable UFW.');
    }
  };

  const disableUFW = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/ufw-disable');
      setResponseMessage(response.data.result);
    } catch (error) {
      setResponseMessage('Failed to disable UFW.');
    }
  };

  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>UFW Control Dashboard</h1>

      <button onClick={enableUFW} style={{ marginRight: '10px' }}>Enable UFW</button>
      <button onClick={disableUFW}>Disable UFW</button>

      <h2>Response:</h2>
      <pre>{responseMessage}</pre>
    </div>
  );
}

export default EnableDisable;

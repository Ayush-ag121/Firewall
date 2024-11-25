import React,{useState,useEffect} from 'react'

export default function Allow_1() {
  const [port, setPort] = useState('');
  const [responseMessage, setResponseMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Send POST request to Flask API
    try {
      const response = await fetch('http://127.0.0.1:5000/api/allow-port', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ port }),
      });

      const data = await response.json();

      if (response.ok) {
        setResponseMessage(data.message);
        setErrorMessage(null);
      } else {
        setErrorMessage(data.error);
        setResponseMessage(null);
      }
    } catch (error) {
      setErrorMessage('Failed to connect to the server');
      setResponseMessage(null);
    }
  };

  return (
    <div className="App">
      <h1>Allow Port Through Firewall</h1>

      <form onSubmit={handleSubmit} className="form-container">
        <label htmlFor="port">Enter Port Number:</label>
        <input
          type="number"
          id="port"
          value={port}
          onChange={(e) => setPort(e.target.value)}
          required
        />
        <button type="submit">Allow Port</button>
      </form>

      {responseMessage && (
        <div className="response">
          <h2>Success:</h2>
          <p>{responseMessage}</p>
        </div>
      )}

      {errorMessage && (
        <div className="error">
          <h2>Error:</h2>
          <p>{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
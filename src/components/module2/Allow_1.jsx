import React,{useState,useEffect, useContext} from 'react'
import Context from '../../context/context';
import { toast } from 'react-toastify';

export default function Allow_1() {
  const [port, setPort] = useState('');
  let {render,setRender}= useContext(Context)
  const [responseMessage, setResponseMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const regex = /^(6553[0-5]|655[0-2][0-9]|65[0-9]{2}|6[1-5][0-9]{3}|[1-9]?[0-9]{1,4})(\/(tcp|udp))?$/;
    if(!regex.test(port)){
      toast.error("Please Enter Valid Port")
      return
    }
    // Send POST request to Flask API
    try {
      if(regex.test(port)){
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
      }else{
        toast.error("Please Enter Valid Port")
        return
      }
    } catch (error) {
      setErrorMessage('Failed to connect to the server');
      setResponseMessage(null);
    }
    setRender(value=>value+1)
  };

  return (
    <div className="App">
      <h1 className='text-[30px]'>Allow Port Through Firewall</h1>

      <form onSubmit={handleSubmit} className="form-container">
        <label htmlFor="port">Enter Port Number:</label>
        <input
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

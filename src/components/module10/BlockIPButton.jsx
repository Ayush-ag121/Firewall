import React, { useState } from 'react';
import axios from 'axios';

const BlockIPButton = () => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleBlockIP = async () => {
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:5000/api/ssh_log_analysis');
            setMessage(response.data.message);
        } catch (error) {
            setMessage('An error occurred while blocking the IP.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <button onClick={handleBlockIP} disabled={loading}>
                {loading ? 'Blocking IP...' : 'Start SSH Log Analysis & Block IP'}
            </button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default BlockIPButton;

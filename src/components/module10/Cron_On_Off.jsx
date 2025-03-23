import React, { useState } from 'react';
import axios from 'axios';

const CronJobManager = () => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleAddCronJob = async () => {
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:5000/api/add_cron_job');
            setMessage(response.data.message);
        } catch (error) {
            setMessage('An error occurred while adding the cron job.');
        } finally {
            setLoading(false);
        }
    };

    const handleRemoveCronJob = async () => {
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:5000/api/remove_cron_job');
            setMessage(response.data.message);
        } catch (error) {
            setMessage('An error occurred while removing the cron job.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <button onClick={handleAddCronJob} disabled={loading}>
                {loading ? 'Adding Cron Job...' : 'Add Cron Job'}
            </button>
            <button onClick={handleRemoveCronJob} disabled={loading}>
                {loading ? 'Removing Cron Job...' : 'Remove Cron Job'}
            </button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default CronJobManager;

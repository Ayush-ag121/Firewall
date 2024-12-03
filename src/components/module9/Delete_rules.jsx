import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Delete_rules = () => {
  const [rules, setRules] = useState([]);
  const [ruleNumber, setRuleNumber] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchUfwStatus();
  }, []);

  const fetchUfwStatus = async () => {
    try {
      const response = await axios.get('http://localhost:5000/ufw-status-module9');
      if (response.data.success) {
        setRules(response.data.status.map((line) => {
          const [ruleNumber, ...rest] = line.split(' ');
          return { ruleNumber: ruleNumber.replace('[', '').replace(']', ''), ruleDetails: rest.join(' ') };
        }));
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      setMessage('Error fetching UFW status.');
    }
  };

  const handleDeleteRule = async () => {
    try {
      const response = await axios.post('http://localhost:5000/delete-rule', { rule_number: parseInt(ruleNumber) });
      setMessage(response.data.message);
      fetchUfwStatus(); // Refresh rules after deletion
    } catch (error) {
      setMessage('Error deleting the rule.');
    }
  };

  return (
    <div>
      <h2>UFW Rule Manager</h2>
      <div>
        <h3>Current UFW Rules:</h3>
        {rules.length > 0 ? (
          <table border="1" cellPadding="10" cellSpacing="0">
            <thead>
              <tr>
                <th>Rule Number</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {rules.map((rule) => (
                <tr key={rule.ruleNumber}>
                  <td>{rule.ruleNumber}</td>
                  <td>{rule.ruleDetails}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No rules available.</p>
        )}
      </div>
      <div>
        <label>
          Enter Rule Number to Delete:
          <input
            type="number"
            value={ruleNumber}
            onChange={(e) => setRuleNumber(e.target.value)}
            placeholder="Rule number"
          />
        </label>
        <button onClick={handleDeleteRule}>Delete Rule</button>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Delete_rules;

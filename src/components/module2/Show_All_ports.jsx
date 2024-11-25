import React,{useState,useEffect} from 'react'

export default function Show_All_ports() {
  const [rules, setRules] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch all firewall rules
  const fetchFirewallRules = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/show-all");
      const data = await response.json();
      if (response.ok) {
        setRules(data.rules);  // Set the raw data (array of strings)
      } else {
        setMessage(data.error || "Failed to fetch firewall rules.");
      }
    } catch (error) {
      setMessage("An error occurred while fetching firewall rules.");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchFirewallRules();
  }, []);

  // Helper function to parse firewall rules data
  const parseRule = (line) => {
    // Remove extra spaces and split the string by spaces (we will split by multiple spaces using regex)
    const parts = line.trim().split(/\s{2,}/);
    if (parts.length === 3) {
      return {
        port: parts[0],
        action: parts[1],
        from: parts[2],
      };
    }
    return null; // return null if the line doesn't match the expected structure
  };

  // Filter and parse the rules
  const parsedRules = rules
    .filter((line) => line && !line.startsWith("Status") && !line.startsWith("To")) // Ignore header and status lines
    .map(parseRule)
    .filter((rule) => rule); // Remove null values

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Firewall Status</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h2>Rules</h2>
          {parsedRules.length > 0 ? (
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>Port</th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>Action</th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>From</th>
                </tr>
              </thead>
              <tbody>
                {parsedRules.map((rule, index) => (
                  <tr key={index}>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>{rule.port}</td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>{rule.action}</td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>{rule.from}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No rules found.</p>
          )}
        </>
      )}
      {message && <p style={{ marginTop: "20px", color: "red" }}>{message}</p>}
    </div>
  );
}

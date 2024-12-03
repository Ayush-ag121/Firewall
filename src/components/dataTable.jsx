import React, { useState ,useEffect} from 'react';
import axios from "axios";
import { FaCheckCircle, FaLock, FaSyncAlt, FaEllipsisV, FaShieldAlt, FaPlusCircle } from 'react-icons/fa';
import Allow_1 from './module2/Allow_1';
// import Allow_all_deny_one_port from './module2/Allow_all_deny_one_port';
import Allow_All_Deny_ports from './module2/Allow_All_Deny_ports';
import Allow_All_Ports from './module2/Allow_All_Ports';
import App_list from './module2/App_list';
import Show_All_ports from './module2/Show_All_ports';
import Block_range_of_ip from './module3/Block_range_of_ip';
import Block_specific_ip from './module3/Block_specific_ip';
import Default_policy from './module4/Default_policy';
import EnableDisable from './module4/Enable-Disable';
import Ipv6_Support from './module4/Ipv6_support';
import Log_read from './module5/Log_read';
import Logging_policy from './module5/Loggin_policy';
import AIT_Specific_Interface_From_Ip from './module6/AIT_to_Specific_Interface_from_ip';
import AIT_to_specific_port_from_specific_ip from './module6/AIT_to_specific_port_to_specific_ip';
import Allow_out_traffic_to_ip from './module6/Allow_out_traffic_to_specific_ip';
import Allow_out_trffic_to_specific_ip_to_port from './module6/Allow_out_trffic_to_specific_ip_to_port';
import Deny_Incoming_Traffic_to_Specific_Interface_from_Specific_IP_Address from './module6/Deny-Incoming-Traffic-to-Specific-Interface-from-Specific-IP-Address';
import Deny_Incoming_Traffic_to_Specific_Port_from_Specific_IP_Address from './module6/Deny-Incoming-Traffic-to-Specific-Port-from-Specific-IP-Address';
import Deny_Outgoing_Traffic_to_Specific_IP_Address from './module6/Deny-Outgoing-Traffic-to-Specific-IP-Address';
import Deny_Outgoing_Traffic_to_Specific_IP_on_Specific_Port from './module6/Deny-Outgoing-Traffic-to-Specific-IP-on-Specific-Port';
import Deny_traffic_from_range_of_Ip_address from './module6/Deny_traffic_from_range_of_Ip_address';

const Datatable = () => {
  // const [deniedPorts, setDeniedPorts] = useState([]);
  // const [portToDeny, setPortToDeny] = useState("");
  // const [message, setMessage] = useState("");
  // const [allowedPorts, setAllowedPorts] = useState([]);

  // // Fetch denied ports from Flask API
  // useEffect(() => {
  //   axios.get("http://127.0.0.1:5000/list-deny-ports")
  //     .then((response) => {
  //       setDeniedPorts(response.data.denied_ports);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching denied ports:", error);
  //     });
  // }, []);

  // // Allow all denied ports
  // const handleAllowAllPorts = () => {
  //   axios.post("http://127.0.0.1:5000/allow-all-ports")
  //     .then((response) => {
  //       setAllowedPorts(response.data.allowed_ports);
  //       setMessage("All denied ports have been allowed successfully.");
  //     })
  //     .catch((error) => {
  //       console.error("Error allowing all ports:", error);
  //       setMessage("Error allowing all ports.");
  //     });
  // };

  // // Deny a specific port
  // const handleDenyPort = () => {
  //   axios.post("http://127.0.0.1:5000/deny-port", { port: portToDeny })
  //     .then((response) => {
  //       setMessage(response.data.message);
  //     })
  //     .catch((error) => {
  //       console.error("Error denying port:", error);
  //       setMessage("Error denying port.");
  //     });
  // };

  // // Manage ports by allowing all and then denying a specific one
  // const handleManagePorts = () => {
  //   axios.post("http://127.0.0.1:5000/manage-ports", { port: portToDeny })
  //     .then((response) => {
  //       setAllowedPorts(response.data.allowed_ports);
  //       setMessage(response.data.message);
  //     })
  //     .catch((error) => {
  //       console.error("Error managing ports:", error);
  //       setMessage("Error managing ports.");
  //     });
  // };

  return (
    // <div className="App">
    //   <h1>Firewall Management</h1>

    //   <div>
    //     <h2>Denied Ports</h2>
    //     <ul>
    //       {deniedPorts.length > 0 ? (
    //         deniedPorts.map((port, index) => (
    //           <li key={index}>{port}</li>
    //         ))
    //       ) : (
    //         <p>No denied ports found.</p>
    //       )}
    //     </ul>
    //   </div>

    //   <div>
    //     <h2>Manage Ports</h2>
    //     <input
    //       type="text"
    //       placeholder="Enter Port to Deny"
    //       value={portToDeny}
    //       onChange={(e) => setPortToDeny(e.target.value)}
    //     />
    //     <button onClick={handleDenyPort}>Deny Port</button>
    //     <button onClick={handleAllowAllPorts}>Allow All Ports</button>
    //     <button onClick={handleManagePorts}>Manage Ports</button>
    //   </div>

    //   {message && <p>{message}</p>}

    //   <div>
    //     <h2>Allowed Ports</h2>
    //     <ul>
    //       {allowedPorts.length > 0 ? (
    //         allowedPorts.map((port, index) => (
    //           <li key={index}>{port}</li>
    //         ))
    //       ) : (
    //         <p>No allowed ports found.</p>
    //       )}
    //     </ul>
    //   </div>
    // </div>
    <>
  {/* <h1 style={{fontSize:"40px"}}>Access Ports</h1>
      <Allow_1/>
      <h1 style={{fontSize:"40px"}}>Ports Manager</h1>
      <Allow_All_Deny_ports/> */}
      {/* <Allow_All_Ports/> */}
      {/* <App_list/>
      <Show_All_ports/> */}





      {/* <Block_range_of_ip/>
      <Block_specific_ip/> */}
        {/* <Block_specific_ip/> */}
        {/* <Block_range_of_ip/> */}


      {/* // module 4 */}
      {/* <Default_policy/>
      <EnableDisable/>
      <Ipv6_Support/> */}


      {/* // module 5 */}
      {/* <Log_read/>
      <Logging_policy/> */}


      {/* Module 6 */}
        {/* <AIT_Specific_Interface_From_Ip/>
        <AIT_to_specific_port_from_specific_ip/>
        <Allow_out_traffic_to_ip/>
        <Allow_out_trffic_to_specific_ip_to_port/>
        <Deny_Incoming_Traffic_to_Specific_Interface_from_Specific_IP_Address/>
        <Deny_Incoming_Traffic_to_Specific_Port_from_Specific_IP_Address/>
        <Deny_Outgoing_Traffic_to_Specific_IP_Address/>
        <Deny_Outgoing_Traffic_to_Specific_IP_on_Specific_Port/>
        <Deny_traffic_from_range_of_Ip_address/> */}
    </>
  );
};

const AdvancedButtons = ({ advanced }) => {
  const [selected, setSelected] = useState({
    CAPTCHA: false,
    AUTH: false,
    DYNAMIC: false,
  });

  const toggleButton = (type) => {
    setSelected((prevState) => ({
      ...prevState,
      [type]: !prevState[type],
    }));
  };

  return (
    <div className="flex space-x-4">
      {advanced.includes('CAPTCHA') && (
        <button
          onClick={() => toggleButton('CAPTCHA')}
          className={`flex items-center px-2 py-1 border rounded ${
            selected.CAPTCHA ? 'border-sea-green-p text-sea-green-p' : 'border-black text-black'
          }`}
        >
          <FaCheckCircle className={`mr-2 ${selected.CAPTCHA ? 'text-sea-green-p' : 'text-black'}`} />
          CAPTCHA
        </button>
      )}
      {advanced.includes('AUTH') && (
        <button
          onClick={() => toggleButton('AUTH')}
          className={`flex items-center px-2 py-1 border rounded ${
            selected.AUTH ? 'border-sea-green-p text-sea-green-p' : 'border-black text-black'
          }`}
        >
          <FaLock className={`mr-2 ${selected.AUTH ? 'text-sea-green-p' : 'text-black'}`} />
          AUTH
        </button>
      )}
      {advanced.includes('DYNAMIC') && (
        <button
          onClick={() => toggleButton('DYNAMIC')}
          className={`flex items-center px-2 py-1 border rounded ${
            selected.DYNAMIC ? 'border-sea-green-p text-sea-green-p' : 'border-black text-black'
          }`}
        >
          <FaSyncAlt className={`mr-2 ${selected.DYNAMIC ? 'text-sea-green-p' : 'text-black'}`} />
          DYNAMIC
        </button>
      )}
    </div>
  );
};

export default Datatable;

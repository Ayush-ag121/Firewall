import React from 'react'
import AIT_Specific_Interface_From_Ip from './module6/AIT_to_Specific_Interface_from_ip';
import AIT_to_specific_port_from_specific_ip from './module6/AIT_to_specific_port_to_specific_ip';
import Allow_out_traffic_to_ip from './module6/Allow_out_traffic_to_specific_ip';
import Allow_out_trffic_to_specific_ip_to_port from './module6/Allow_out_trffic_to_specific_ip_to_port';
import Deny_Incoming_Traffic_to_Specific_Interface_from_Specific_IP_Address from './module6/Deny-Incoming-Traffic-to-Specific-Interface-from-Specific-IP-Address';
import Deny_Incoming_Traffic_to_Specific_Port_from_Specific_IP_Address from './module6/Deny-Incoming-Traffic-to-Specific-Port-from-Specific-IP-Address';
import Deny_Outgoing_Traffic_to_Specific_IP_Address from './module6/Deny-Outgoing-Traffic-to-Specific-IP-Address';
import Deny_Outgoing_Traffic_to_Specific_IP_on_Specific_Port from './module6/Deny-Outgoing-Traffic-to-Specific-IP-on-Specific-Port';
import Deny_traffic_from_range_of_Ip_address from './module6/Deny_traffic_from_range_of_Ip_address';
import Allow_inbound_http_traffic from './module8/Allow_inbound_http_traffic'
import Allow_incoming_traffic_from_incoming_ip from './module8/Allow_incoming_traffic_from_incoming_ip'
import Allow_traffic_from_range_of_ip from './module8/Allow_traffic_from_range_of_ip'
import Deny_incoming_traffic_from_specific_ip_address from './module8/Deny_incoming_traffic_from_specific_ip_address'

export default function Module6() {
  return (
    <div>
       <AIT_Specific_Interface_From_Ip/>
        <AIT_to_specific_port_from_specific_ip/>
        <Allow_out_traffic_to_ip/>
        <Allow_out_trffic_to_specific_ip_to_port/>
        <Deny_Incoming_Traffic_to_Specific_Interface_from_Specific_IP_Address/>
        <Deny_Incoming_Traffic_to_Specific_Port_from_Specific_IP_Address/>
        <Deny_Outgoing_Traffic_to_Specific_IP_Address/>
        <Deny_Outgoing_Traffic_to_Specific_IP_on_Specific_Port/>
        <Deny_traffic_from_range_of_Ip_address/>
        <Allow_inbound_http_traffic/>
        <Allow_incoming_traffic_from_incoming_ip/>
        <Allow_traffic_from_range_of_ip/>
        <Deny_incoming_traffic_from_specific_ip_address/>
    </div>
  )
}

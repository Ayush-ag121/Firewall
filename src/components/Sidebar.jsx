import { TfiBarChartAlt } from "react-icons/tfi";
import { GrNotes } from "react-icons/gr";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { LuDot } from "react-icons/lu";
import { CgNotes } from "react-icons/cg";
import { GiBrokenShield } from "react-icons/gi";
import logo from './logo.png'
import {
  IoIosArrowUp,
  IoIosArrowDown,
  IoIosArrowForward,
} from "react-icons/io";
import { LiaToolsSolid } from "react-icons/lia";
import { IoSettingsOutline } from "react-icons/io5";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import useLocation

export default function Sidebar() {
  const [isSystemModalOpenSites, setisSystemModalOpenSites] = useState(false);
  const [isProtectionOpenDropdown, setIsProtectionDropdown] = useState(false);
  const [sitesDropValue, setSitesDropValue] = useState(0);
  const [isSystemModalOpen, setSystemModalOpen] = useState(false); // State for modal
  let navigate = useNavigate()
  const location = useLocation(); // Get the current location

  const toggleDropdownSites = () => {
    setisSystemModalOpenSites(!isSystemModalOpenSites);
    setIsProtectionDropdown(false);
  };

  const toogleOtherComponents = () => {
    setSitesDropValue(0);
    setisSystemModalOpenSites(false);
  };

  const toggleDropdownProtection = () => {
    setIsProtectionDropdown(!isProtectionOpenDropdown);
    setSitesDropValue(0);
    setisSystemModalOpenSites(false);
  };

  const toggleSystemModal = () => {
    setSystemModalOpen(!isSystemModalOpen); // Toggle the modal state
  };

  // Function to determine if a route is active
  const isActive = (path) => (location.pathname.includes(path) ? "bg-sea-green-p text-white" : "");

  return (
    <>
      <div className="  p-4 relative overflow-hidden">
        <div style={{marginTop:"30px"}} className="flex items-center gap-1 cursor-pointer">
          <img src={logo} style={{height:"40px",width:"40px"}}></img>
          <h1 style={{marginTop:"0px"}} className="text-xl font-bold">Friendly Firewall</h1>
        </div>

        <div className="flex flex-col mt-6 gap-1">
          <div
                      onClick={()=>navigate('module2')}
                      className={`flex cursor-pointer items-center gap-3 w-full ${isActive('/module2')} rounded-md p-4 ease-in duration-100`}
          >
            <TfiBarChartAlt />
            <span>Port And Protocol Filtering</span>
          </div>

          <div
                      onClick={()=>navigate('module3')}
                      className={`flex cursor-pointer items-center gap-3 w-full ${isActive('/module3')} rounded-md p-4 ease-in duration-100`}
            // onClick={toogleOtherComponents}
          >
            <GrNotes />
            <span>Ip Blocking</span>
          </div>

          {/* Sites Dropdown */}
          <div
                      onClick={()=>navigate('module4')}

            className={`flex items-center cursor-pointer gap-3 w-full ${isActive('/module4')} rounded-md p-4 ease-in duration-100`}
            // onClick={toogleOtherComponents}
          >
            <GrNotes />
            <span>Firewall Configuration</span>
          </div>
          <a
            onClick={()=>navigate('module5')}
            className={`flex items-center cursor-pointer gap-3 w-full ${isActive('/module5')} rounded-md p-4 ease-in duration-100`}
            // onClick={toogleOtherComponents}
          >
            <GrNotes />
            <span>Logging and Monitoring</span>
          </a>
          <div
            // href="/module6"
            onClick={()=>navigate('module6')}
            className={`flex items-center cursor-pointer gap-3 w-full ${isActive('/module6')} rounded-md p-4 ease-in duration-100`}
            // onClick={toogleOtherComponents}
          >
            <GrNotes />
            <span>Network Traffic Filtering</span>
          </div>
          {/* <div
            // href="/module6"
            onClick={()=>navigate('module8')}
            className={`flex items-center  cursor-pointer gap-3 w-full ${isActive('/module8')} rounded-md p-4 ease-in duration-100`}
            // onClick={toogleOtherComponents}
          >
            <GrNotes />
            <span>Default Deny Policy</span>
          </div> */}
          <div
            // href="/module6"
            onClick={()=>navigate('module9')}
            className={`flex items-center cursor-pointer gap-3 w-full ${isActive('/module9')} rounded-md p-4 ease-in duration-100`}
            // onClick={toogleOtherComponents}
          >
            <GrNotes />
            <span>Rules Deletion</span>
          </div>
          <div
            // href="/module6"
            onClick={()=>navigate('module10')}
            className={`flex items-center cursor-pointer gap-3 w-full ${isActive('/module10')} rounded-md p-4 ease-in duration-100`}
            // onClick={toogleOtherComponents}
          >
            <GrNotes />
            <span>SSH Protection</span>
          </div>
          {/* <div
            // href="/module6"
            onClick={()=>navigate('sshblocker')}
            className={`flex items-center gap-3 w-full ${isActive('/events')} rounded-md p-4 ease-in duration-100`}
            // onClick={toogleOtherComponents}
          >
            <GrNotes />
            <span>SSH Blocker</span>
          </div> */}
          <div
            className={`overflow-hidden ease-in-out duration-500 ${
              isSystemModalOpenSites ? "max-h-40" : "max-h-0" 
            }`}
          >
            <div className={`flex flex-col gap-2 p-4`}>
              <a
                href="/sites"
                className="flex items-center gap-4 ease-in duration-100"
                role="sites-item"
                onClick={() => setSitesDropValue(1)}
              >
                {sitesDropValue === 1 ? (
                  <>
                    <GoDotFill className="text-sea-green-p" />
                    <span className="font-bold">Website</span>
                  </>
                ) : (
                  <>
                    <LuDot />
                    <span className="text-gray-500">Website</span>
                  </>
                )}
              </a>

              <a
                href="#"
                className="flex items-center gap-4 ease-in duration-100"
                role="sites-item"
                onClick={() => setSitesDropValue(2)}
              >
                {sitesDropValue === 2 ? (
                  <>
                    <GoDotFill className="text-sea-green-p" />
                    <span className="font-bold">SSL Cert</span>
                  </>
                ) : (
                  <>
                    <LuDot />
                    <span className="text-gray-500">SSL Cert</span>
                  </>
                )}
              </a>

              <a
                href="#"
                className="flex items-center gap-4 ease-in duration-100"
                role="sites-item"
                onClick={() => setSitesDropValue(3)}
              >
                {sitesDropValue === 3 ? (
                  <>
                    <GoDotFill className="text-sea-green-p" />
                    <span className="font-bold">Proxy Setting</span>
                  </>
                ) : (
                  <>
                    <LuDot />
                    <span className="text-gray-500">Proxy Setting</span>
                  </>
                )}
              </a>
            </div>
          </div>

         

        
        </div>

       
      </div>

      {/* PopUp Window */}
      {isSystemModalOpen && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-75">
          <div className="bg-white rounded-md p-6 w-3/4 shadow-lg max-w-4xl relative">
            <div className="relative">
              <div className="flex justify-between items-start border-b-2 pb-4">
                <div>
                  <span className="bg-yellow-400 text-white rounded-md p-1 px-3 inline-block mb-2 mr-1">
                    XSS
                  </span>
                  <span className="text-md">
                    https://demo.waf.chaitin.com/tomcat-docs/appdev/sample/web/hello.jsp?test=&lt;script&gt;alert(12345)&lt;/script&gt;
                  </span>
                  <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-lg">
                    <div className="flex flex-col gap-4">
                      {/* Attack IP */}
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500 font-semibold">Attack IP</span>
                        <div>
                          <span className="text-black font-medium">123.254.107.235</span>
                          <button className="text-sea-green-p text-xs ml-2">Whitelist</button>
                        </div>
                      </div>
                      {/* Result */}
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500 font-semibold">Result</span>
                        <span className="text-black font-medium">Blocked</span>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="absolute top-0 right-0 text-gray-500" onClick={toggleSystemModal}>
                  <span className="text-2xl">&times;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

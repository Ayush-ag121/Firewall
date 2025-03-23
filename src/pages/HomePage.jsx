import { useLocation } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Sidebar from "../components/Sidebar";
import Datatable from "../components/dataTable";
import Module2 from "../components/Module2";
import Module3 from "../components/Module3";
import Module4 from "../components/Module4";
import Module5 from "../components/Module5";
import Module6 from "../components/Module6";
import Module8 from "../components/Module8";
import Module9 from "../components/Module9";
import SSHBlocker from "../components/SSHBlocker";
import Module10 from "../components/module10";
import { useState } from "react";

export default function HomePage() {
  const location = useLocation();
  const [clicked,setClicked] = useState(false)
  return (
    <div className="flex h-auto min-h-[100vh] relative">
        <div onClick={()=>setClicked(true)} className={`w-[50px] absolute ${!clicked?"left-2 ":"hidden"}  top-5 cursor-pointer max-md:block hidden h-[auto] flex flex-col gap-[5px] justify-center items-center`}>
          <div className="h-[3px] w-[35px] bg-black  mt-[5px]"></div>
          <div className="h-[3px] w-[35px] bg-black mt-[5px]"></div>
          <div className="h-[3px] w-[35px] bg-black mt-[5px]"></div>
        </div>
      <section  className={`${clicked ? "w-[40%] fixed left-0 top-0":"lg:w-[14%] md:w-[25%]  w-[0px] max-md:fixed overflow-hidden "} bg-light-gray-neon-p  transition-all delay-300 ease-in h-full`}>
      <div onClick={()=>setClicked(false)}  className={` ${clicked ? "block":"hidden"} cursor-pointer z-[10000] absolute right-5 top-5`}>X</div>

        <Sidebar />
      </section>

      <section className="flex-grow bg-white max-w-[100vw]">
      {(location.pathname.includes("/module2") || location.pathname=="http://localhost:3000") &&  <Module2 />}
      {location.pathname.includes("/module3") && <Module3 />}
      {location.pathname.includes("/module4") && <Module4 />}
      {location.pathname.includes("/module5") && <Module5 />}
      {location.pathname.includes("/module6") && <Module6 />}
      {location.pathname.includes("/module8") && <Module8 />}
      {location.pathname.includes("/module9") && <Module9 />}
      {location.pathname.includes("/module10") && <Module10 />}

      {location.pathname.includes("/dashboard") && <Dashboard />}
      {location.pathname.includes("/sites") && <Datatable />}
      {location.pathname.includes("/sshblocker") && <SSHBlocker />}

      </section>
    </div>
  );
}

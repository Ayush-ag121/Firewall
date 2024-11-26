import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Dashboard from "./components/Dashboard";
import Datatable from "./components/dataTable";
import Context from "./context/context";
import { useState } from "react";

export default function App() {
  let [render,setRender] = useState(0)
  return (
    <Context.Provider value={{render,setRender}}>

    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="sites" element={<Datatable />} />
        </Route>
      </Routes>
    </Router>
    </Context.Provider>
  );
}

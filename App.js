import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './Login';
import Fpassword from "./Fpassword";
import Register from "./Register";
import DashBoard from "./DashBoard";
import Navbar from "./Navbar";
import { useState } from "react";
import EmployeeDetails from "./EmployeeDetails";
import Error_logo from "./Error_logs";
// import GetingData from "./GetingData";


function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  return(
    
        <Router>
           {/* {loggedIn && <Navbar handleLogout={() => setLoggedIn(false)} />} */}
            {/* <GetingData></GetingData> */}
            <Routes>
                <Route  path="/" element={<Login setLoggedIn={setLoggedIn} />} />
                <Route path="/forgot-password" element={<Fpassword></Fpassword>}/>
                <Route path="/register" element={<Register />} />
                <Route path="/DashBoard" element={<DashBoard />} />
                <Route path="/EmployeeDetails" element={<EmployeeDetails />} />
                <Route path="/Error_Logs" element={<Error_logo></Error_logo>}></Route>
            </Routes>
        </Router>
        
  );
}

export default App;
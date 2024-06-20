import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./cmp/Navbar";
import React, { useState } from "react";
//import Login from "./cmp/pages/Login";
import About from "./cmp/pages/About";
import Register from "./cmp/pages/Register";
 
import {
  FeeDetails,
  Circular,
  HolidayList,
  Home,
} from "./cmp/pages/index";
 
import StaffDashboard from "./cmp/pages/StaffDashboard";
import CreateNewCircular from "./cmp/pages/StaffPages/CreateNewCircular";
import GetAllStudents from "./cmp/pages/StaffPages/GetAllStudents";
//import GetSpecificStudent from "./cmp/pages/StaffPages/GetSpecificStudent";
import GetSpecificStudent from "./cmp/pages/StaffPages/GetSpecificStudents";
import NewStudentRequest from "./cmp/pages/StaffPages/NewStudentRequest";
import PreviousCircular from "./cmp/pages/StaffPages/PreviousCircular";
import ParentDashboard from "./cmp/pages/ParentDashboard";
 
function App() {
  const [registrationId, setRegistrationId] = useState(null);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              setRegistrationId={setRegistrationId}
              registrationId={registrationId}
            />
          }
        />
        <Route path="/About" element={<About />} />
        <Route path="/Circular" element={<Circular/>} />
        <Route path="/HolidayList" element={<HolidayList />} />
        <Route path="/FeeDetails" element={<FeeDetails />} />
        {/* <Route path="/Login" element={<Login />} /> */}
        <Route path="/Register" element={<Register />} />
        <Route path="/StaffDashboard" element={<StaffDashboard />} />
        <Route
          path="/ParentDashboard"
          element={<ParentDashboard registrationId={registrationId} />}
        />
        <Route
          path="/StaffPages/CreateNewCircular"
          element={<CreateNewCircular />}
        />
        <Route path="/StaffPages/GetAllStudent" element={<GetAllStudents />} />
        <Route
          path="/StaffPages/GetSpecificStudent"
          element={<GetSpecificStudent />}
        />
        <Route
          path="/StaffPages/NewStudentRequest"
          element={<NewStudentRequest />}
        />
        <Route
          path="/StaffPages/PreviousCircular"
          element={<PreviousCircular />}
        />
      </Routes>
    </div>
  );
}
 
export default App;
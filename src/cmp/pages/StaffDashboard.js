import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using react-router for
 
import "./StaffDashboard.css";
 
export default function StaffDashboard() {
  return (
    <div className="staff-dashboard">
      <div className="main-container">
        <div className="row">
          <Link to="/StaffPages/CreateNewCircular" className="compartment">
            Create New Circular
          </Link>
          <Link to="/StaffPages/GetAllStudent" className="compartment">
            Get All Student
          </Link>
          <Link to="/StaffPages/GetSpecificStudent" className="compartment">
            Get Specific Student
          </Link>
        </div>
        <div className="row">
          <Link to="/StaffPages/NewStudentRequest" className="compartment">
            New Student Request
          </Link>
          <Link to="/StaffPages/PreviousCircular" className="compartment">
            Previous Circular
          </Link>
        </div>
      </div>
    </div>
  );
  // );
}
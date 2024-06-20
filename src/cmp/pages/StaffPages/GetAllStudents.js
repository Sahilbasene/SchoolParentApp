import "./GetAllStudents.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button } from "react-bootstrap";
 
export default function GetAllStudents() {
  const path = "https://localhost:7051/api/Staffs/";
  const [parentData, setParentData] = useState([]);
  //const [errors, setErrors] = useState({});
  useEffect(() => {
    const fetchData = () => {
      axios
        .get(path)
        .then((data) => setParentData(data.data))
        .catch((error) => console.log(error));
    };
 
    fetchData();
  }, []);
  const handleAccept = (parentId) => {
    axios
      .put(`${path}approve/${parentId}`)
      .then(() => {
        setParentData(
          parentData.map((parent) =>
            parent.parentId === parentId
              ? {
                  ...parent,
                  status: "approved",
                }
              : parent
          )
        );
      })
      .catch((error) => {
        console.log("There was an error accepting data!", error);
      });
  };
  const handleReject = (parentId) => {
    axios
      .put(`${path}reject/${parentId}`)
      .then(() => {
        setParentData(
          parentData.map((parent) =>
            parent.parentId === parentId
              ? {
                  ...parent,
                  status: "rejected",
                }
              : parent
          )
        );
      })
      .catch((error) => {
        console.log("There was an error rejecting data!", error);
      });
  };
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Parent Id</th>
            <th>Parent Name</th>
            <th>Student Name</th>
            <th>Student Register Number</th>
            <th>Registration Id</th>
            <th>Address </th>
            <th>State</th>
            <th>Country</th>
            <th>City</th>
            <th>Zip Code</th>
            <th>Email Address</th>
            <th>Primary Contact Person</th>
            <th>Primary ContactPerson Mobile</th>
            <th>Secondary Contact Person</th>
            <th>Secondary ContactPerson Mobile</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {parentData.map((parent) => (
            <tr key={parent.parentId}>
              <td>{parent.parentId}</td>
              <td>{parent.parentName}</td>
              <td>{parent.studentName}</td>
              <td>{parent.studentRegisterNumber}</td>
              <td>{parent.registrationId}</td>
              <td>{parent.address}</td>
              <td>{parent.state}</td>
              <td>{parent.country}</td>
              <td>{parent.city}</td>
              <td>{parent.zipCode}</td>
              <td>{parent.emailAddress}</td>
              <td>{parent.primaryContactPerson}</td>
              <td>{parent.primaryContactPersonMobile}</td>
              <td>{parent.secondaryContactPerson}</td>
              <td>{parent.secondaryContactPersonMobile}</td>
              <td>{parent.status}</td>
              <td>
                <Button
                  variant="success"
                  onClick={() => handleAccept(parent.parentId)}
                >
                  Approved
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleReject(parent.parentId)}
                  className="ml-2"
                >
                  Rejected
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
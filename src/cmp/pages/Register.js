import React, { useState } from "react";
import axios from "axios";
import "./Register.css"; // Import the CSS file
 
const Register = () => {
  const [formData, setFormData] = useState({
    ParentName: "",
    StudentName: "",
    StudentRegisterNumber: "",
    Address: "",
    State: "",
    Country: "",
    City: "",
    ZipCode: "",
    EmailAddress: "",
    PrimaryContactPerson: "",
    PrimaryContactPersonMobile: "",
    SecondaryContactPerson: "",
    SecondaryContactPersonMobile: "",
    Password: "",
    SetPassword: "",
    Status: "",
  });
  const [states, setStates] = useState([]);
  const [errors, setErrors] = useState({});
  const countryStateData = {
    USA: ["California", "Florida", "New York"],
    Canada: ["Alberta", "British", "Columbia"],
    India: ["Delhi", "Maharashtra"],
  };
  const validate = () => {
    let errors = {};
 
    if (!formData.ParentName.match(/^[A-Za-z ]+$/)) {
      errors.ParentName =
        "Parent Name should contain only alphabets and spaces";
    }
    if (!formData.StudentName.match(/^[A-Za-z ]+$/)) {
      errors.StudentName =
        "Student Name should contain only alphabets and spaces";
    }
    if (!formData.StudentRegisterNumber.match(/^R-\d{3}$/)) {
      errors.StudentRegisterNumber =
        'Student Register Number should be in the format "R-XXX"';
    }
    if (!formData.ZipCode.match(/^\d{6}$/)) {
      errors.ZipCode = "Zip Code should be 6 digits";
    }
    if (!formData.City.match(/^[A-Za-z]+$/)) {
      errors.City = "City should contain only alphabets";
    }
    if (!formData.PrimaryContactPersonMobile.match(/^\d{10}$/)) {
      errors.PrimaryContactPersonMobile =
        "Primary Contact Person Mobile should be 10 digits";
    }
    if (
      formData.SecondaryContactPersonMobile &&
      !formData.SecondaryContactPersonMobile.match(/^\d{10}$/)
    ) {
      errors.SecondaryContactPersonMobile =
        "Secondary Contact Person Mobile should be 10 digits";
    }
    if (!formData.EmailAddress.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      errors.EmailAddress = "Invalid Email Address";
    }
 
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "Country") {
      setStates(countryStateData[value] || []);
    }
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post(
          "https://localhost:7051/api/Parents/",
          formData
        );
        const registrationId = response.data.registrationId;
        console.log(response.data);
        alert(
          `Registration successful! Your Registration Id is: ${registrationId}. Please Visit login page.`
        );
        window.location.href = "/";
      } catch (error) {
        console.error(
          "Registration Failed",
          error.response?.data || error.message
        );
        alert("There was an error registering the parent!");
      }
    }
  };
 
  return (
    <div className="form-container">
      <h1>Parent Registration Form</h1>
      <h3 className="personal-heading">Personal Information</h3>
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-row">
          <input
            type="text"
            name="ParentName"
            value={formData.ParentName}
            onChange={handleChange}
            placeholder="Parent Name"
            className="form-input half-width"
          />
          {errors.ParentName && (
            <div className="error">{errors.ParentName}</div>
          )}
          <input
            type="text"
            name="StudentName"
            value={formData.StudentName}
            onChange={handleChange}
            placeholder="Student Name"
            className="form-input half-width"
          />
          {errors.StudentName && (
            <div className="error">{errors.StudentName}</div>
          )}
        </div>
        <div className="form-row">
          <input
            type="text"
            name="StudentRegisterNumber"
            value={formData.StudentRegisterNumber}
            onChange={handleChange}
            placeholder="Student Register Number"
            className="form-input half-width"
          />
          {errors.StudentRegisterNumber && (
            <div className="error">{errors.StudentRegisterNumber}</div>
          )}
          <input
            type="email"
            name="EmailAddress"
            value={formData.EmailAddress}
            onChange={handleChange}
            placeholder="Email Address"
            className="form-input half-width"
          />
          {errors.EmailAddress && (
            <div className="error">{errors.EmailAddress}</div>
          )}
        </div>
        <h3 className="address-heading">Address</h3>
        <div className="form-row">
          <input
            type="text"
            name="Address"
            value={formData.Address}
            onChange={handleChange}
            placeholder="Address"
            className="form-input full-width"
          />
        </div>
        <div className="form-row">
          <input
            type="text"
            name="City"
            value={formData.City}
            onChange={handleChange}
            placeholder="City"
            className="form-input half-width"
          />
          {errors.City && <div className="error">{errors.City}</div>}
          <input
            type="text"
            name="ZipCode"
            value={formData.ZipCode}
            onChange={handleChange}
            placeholder="Zip Code"
            className="form-input half-width"
          />
          {errors.ZipCode && <div className="error">{errors.ZipCode}</div>}
        </div>
        <div className="form-row">
          <select
            name="Country"
            value={formData.Country}
            onChange={handleChange}
            className="form-select half-width"
            required
          >
            <option value="">Select Country</option>
            {Object.keys(countryStateData).map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
          <select
            name="State"
            value={formData.State}
            onChange={handleChange}
            className="form-select half-width"
            required
          >
            <option value="">Select State</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
        <h3 className="otherinfo-heading">Other Information</h3>
        <div className="form-row">
          <input
            type="text"
            name="PrimaryContactPerson"
            value={formData.PrimaryContactPerson}
            onChange={handleChange}
            placeholder="Primary Contact Person"
            className="form-input half-width"
          />
          <input
            type="text"
            name="PrimaryContactPersonMobile"
            value={formData.PrimaryContactPersonMobile}
            onChange={handleChange}
            placeholder="Primary Contact Person Mobile"
            className="form-input half-width"
          />
          {errors.PrimaryContactPersonMobile && (
            <div className="error">{errors.PrimaryContactPersonMobile}</div>
          )}
        </div>
        <div className="form-row">
          <input
            type="text"
            name="SecondaryContactPerson"
            value={formData.SecondaryContactPerson}
            onChange={handleChange}
            placeholder="Secondary Contact Person"
            className="form-input half-width"
          />
          <input
            type="text"
            name="SecondaryContactPersonMobile"
            value={formData.SecondaryContactPersonMobile}
            onChange={handleChange}
            placeholder="Secondary Contact Person Mobile"
            className="form-input half-width"
          />
          {errors.SecondaryContactPersonMobile && (
            <div className="error">{errors.SecondaryContactPersonMobile}</div>
          )}
        </div>
        <div className="form-row">
          <input
            type="password"
            name="Password"
            value={formData.Password}
            onChange={handleChange}
            placeholder="Password"
            className="form-input half-width"
          />
          <input
            type="password"
            name="SetPassword"
            value={formData.SetPassword}
            onChange={handleChange}
            placeholder="Set Password"
            className="form-input half-width"
          />
        </div>
        <div className="form-row">
          <input
            type="text"
            name="Status"
            value={formData.Status}
            onChange={handleChange}
            placeholder="Status"
            className="form-input half-width"
          />
        </div>
        <button type="submit" className="form-button">
          Register
        </button>
      </form>
    </div>
  );
};
 
export default Register;
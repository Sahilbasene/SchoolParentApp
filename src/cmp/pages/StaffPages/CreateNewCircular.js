
import React, { useState } from "react";
import axios from "axios";
import "./CreateNewCircular.css";
 
const CreateNewCircular = () => {
  const [formData, setFormData] = useState({
    NotificationDate: "",
    InformationText: "",
    NotificationPostedBy: "",
  });
 
  const [errors, setErrors] = useState({
    NotificationDate: "",
    InformationText: "",
    NotificationPostedBy: "",
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
 
  const validateForm = () => {
    let valid = true;
    let newErrors = {
      NotificationDate: "",
      InformationText: "",
      NotificationPostedBy: "",
    };
 
    const today = new Date().toISOString().split('T')[0];
 
    if (!formData.NotificationDate) {
      newErrors.NotificationDate = "Notification Date is required.";
      valid = false;
    } else if (formData.NotificationDate < today) {
      newErrors.NotificationDate = "Notification Date should not be earlier than today.";
      valid = false;
    }
 
    if (!formData.InformationText) {
      newErrors.InformationText = "Information Text is required.";
      valid = false;
    }
 
    if (!formData.NotificationPostedBy) {
      newErrors.NotificationPostedBy = "Notification Posted By is required.";
      valid = false;
    } else if (!/^[A-Za-z ]+$/.test(formData.NotificationPostedBy)) {
      newErrors.NotificationPostedBy = "Notification Posted By should contain only alphabets and spaces.";
      valid = false;
    }
 
    setErrors(newErrors);
    return valid;
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
 
    if (validateForm()) {
      try {
        const response = await axios.post(
          "https://localhost:7051/api/Circulars/",
          formData
        );
 
        console.log(response.data);
        alert("Circular is created");
        // Optionally, reset the form and errors
        setFormData({
          NotificationDate: "",
          InformationText: "",
          NotificationPostedBy: "",
        });
        setErrors({
          NotificationDate: "",
          InformationText: "",
          NotificationPostedBy: "",
        });
      } catch (error) {
        console.error("Circular creation failed", error.response?.data || error.message);
        alert("There was an error creating the circular!");
      }
    } else {
      alert("Please fix the validation errors.");
    }
  };
 
  return (
    <div className="circular-main-container">
      <div className="create-new-circular-container">
        <h1>Create new Circular</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="main-text-circular-container">
          <div className="Circular-text">
            <textarea
              rows={4}
              cols={68}
              
              name=" InformationText"
              value={formData.InformationText}
              onChange={handleChange}
              placeholder="Information Text"
              required
            />
            {errors.InformationText && (
              <span className="error">{errors.InformationText}</span>
            )}
          </div>
          <br />
          <div className="circular-bottom">
            <div className="clr-poasted-by">
              <input
                type="text"
                name="NotificationPostedBy"
                value={formData.NotificationPostedBy}
                onChange={handleChange}
                placeholder="Notification Posted by"
                required
              />
              {errors.NotificationPostedBy && (
                <span className="error">{errors.NotificationPostedBy}</span>
              )}
            </div>
            <div className="posted-date">
              <input
                type="date"
                name="NotificationDate"
                value={formData.NotificationDate}
                onChange={handleChange}
                required
              />
              {errors.NotificationDate && (
                <span className="error">{errors.NotificationDate}</span>
              )}
            </div>
          </div>
        </div>
        <div className="submit-circular">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
 
export default CreateNewCircular;












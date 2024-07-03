import React from "react";
import PropTypes from "prop-types";
import "./About.css";
 
function About({ title, description }) {
  return (
    <div className="about-td">
      <h2>{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: description }} />
      <div className="contact-us-container">
        <h3><u>Contact Us</u></h3>
        <ul>
          <li><strong>Email:</strong> info@schoolparentapp.com</li>
          <li><strong>Phone:</strong> +91 123 456 7890</li>
          <li><strong>Address: Abc-123 , street xyz , xyz  </strong> </li>
        </ul>
      </div>
    </div>
  );
}

About.propTypes = {
 
  description: PropTypes.string.isRequired,
};

 
About.defaultProps = {
    description: `
  
  <div class="image-container1">
        <img src="/about-us.png" width="1200" height="260" alt="DummyImage1" />
      </div>
    <div class="about-container">
     
      <br>
      <div class="image-text-container">
        <div class="image-container2">
          <img src="/school-image.png" alt="Dummy Image2" />
        </div>
          <p> 
            Welcome to School Parent App, a place where academic excellence meets holistic development. Our school is dedicated to fostering a nurturing and stimulating environment that encourages students to reach their full potential.
            The need for education is becoming imperative for nation’s development index and a stable society. Shaping the lives of children of marginalized sections of society by providing education is perhaps the most important aspect of nation building. India is a signatory to United Nation’s Child Rights convention which mandates universal primary education.
            Selecting the right school is like selecting a drop from the ocean. 
      </div>
    </div>
  `,
};
 
export default About;
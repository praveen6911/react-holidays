import React from 'react';
import '../styles/AboutPage.css'; // Import CSS file for styling

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="container">
        <h1>About Us</h1>
        <p>
          Welcome to our restaurant! We are passionate about serving delicious
          food and providing an exceptional dining experience. Our team is dedicated
          to ensuring that every meal you have with us is memorable.
        </p>
        <p>
          Our journey started in [Year] with a vision to create a place where people
          can come together to enjoy great food and company. Over the years, we have
          grown and evolved, but our commitment to quality and customer satisfaction
          has remained the same.
        </p>
        <p>
          Thank you for choosing our restaurant. We look forward to serving you!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

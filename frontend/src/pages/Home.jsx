import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css"; // Import styles

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container d-flex align-items-center justify-content-center vh-100">
      <div className="glassmorphic-box text-center p-4">
        <h1 className="display-4 text-white">Welcome to Automated Cybersecurity & Network Monitoring System</h1>
        <p className="lead text-white">"Seamlessly connect, create, and secure your digital experience—your journey starts here."</p>
        <button className="btn btn-primary mt-3" onClick={() => navigate("/login")}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;

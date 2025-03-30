import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/Register.css"; // Custom CSS for Glassmorphism

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: ""  // Default role
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8000/api/auth/register/", formData);
      alert("Registration Successful! You can now log in.");
    } catch (error) {
      alert("Error registering. Please try again.");
    }
  };

  return (
    <div className="register-container d-flex align-items-center justify-content-center vh-100">
      <div className=" register-form p-4 shadow-lg">
        <h2 className="text-center mb-4">Create an Account</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              name="username"
              onChange={handleChange}
              className="form-control"
              placeholder="Enter your username"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              name="password"
              onChange={handleChange}
              className="form-control"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-3">
    <select name="role" onChange={handleChange} className="form-control" required>
      <option value="viewer">Viewer</option>
      <option value="admin">Admin</option>
      <option value="analyst">Security Analyst</option>
    </select>
  </div>

          <button type="submit" className="btn btn-primary w-100">Sign Up</button>
        </form>

        <p className="text-center mt-3">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

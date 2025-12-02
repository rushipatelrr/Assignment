import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  // Form state to store registration inputs
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
 
  // Update form state on input change
  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
 
  // Handle registration form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload

    // basic validation
    if (!form.name || !form.email || !form.password) {
      alert("All fields are required"); // show error if any field is empty
      return;
    }

    // save user data in localStorage
    localStorage.setItem("user", JSON.stringify(form));
    alert("Registration successful! Please login."); // show success message
    navigate("/login");  // redirect to login page
  };

  return (
    <div className="col-md-5 mx-auto mt-5">
      <h2 className="text-center mb-4">Register</h2>

      <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            name="name"
            type="text"
            className="form-control"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your full name"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            name="email"
            type="email"
            className="form-control"
            value={form.email}
            onChange={handleChange}
            placeholder="example@mail.com"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            name="password"
            type="password"
            className="form-control"
            value={form.password}
            onChange={handleChange}
            placeholder="Choose a password"
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;

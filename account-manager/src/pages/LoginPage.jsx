import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  // retrieve previously registered user from localStorage
  const savedUser = JSON.parse(localStorage.getItem("user"));

  // local state to store login form inputs
  const [form, setForm] = useState({ email: "", password: "" });

  // update form state on every input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  // handle login form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    // check if saved user exists and credentials match
    if (
      savedUser &&
      savedUser.email === form.email &&
      savedUser.password === form.password
    ) {
      localStorage.setItem("isLoggedIn", true); // mark user as logged in
      navigate("/profile"); // redirect to profile page
    } else {
      alert("Invalid email or password"); // show error for invalid credentials
    }
  };

  return (
    <div className="col-md-5 mx-auto mt-5">
      <h2 className="text-center mb-4">Login</h2>

      <form onSubmit={handleSubmit} className="card p-4 shadow">
        
        <input
          type="email"
          name="email"
          className="form-control mb-3"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          className="form-control mb-3"
          placeholder="Password"
          onChange={handleChange}
        />

        <button className="btn btn-success w-100">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;

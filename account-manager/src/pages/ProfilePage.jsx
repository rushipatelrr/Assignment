import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();

  // local state to store user information for editing
  const [user, setUser] = useState({});

  // load user data on component mount
  useEffect(() => {
    // check if user is logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    // fetch saved user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    // if user is not logged in, redirect to login page
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      setUser(storedUser); // load user data into state for editing
    }
  }, []);

  // handle input changes for profile fields
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // save updated profile data in localStorage
  const handleSave = () => {
    localStorage.setItem("user", JSON.stringify(user));
    alert("Profile updated!");
  };

  // logout user and redirect to login page
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div className="col-md-6 mx-auto mt-5">
      
      <h2 className="text-center mb-4">My Profile</h2>

      <div className="card p-4 shadow">

        <input
          name="name"
          className="form-control mb-3"
          value={user?.name || ""}
          onChange={handleChange}
        />

        <input
          name="email"
          className="form-control mb-3"
          value={user?.email || ""}
          onChange={handleChange}
        />

        <input
          name="password"
          className="form-control mb-3"
          value={user?.password || ""}
          onChange={handleChange}
        />

        <button className="btn btn-primary w-100 mb-2" onClick={handleSave}>
          Save Changes
        </button>

        <button className="btn btn-danger w-100" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;

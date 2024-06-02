import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./EditProfile.module.css";

const EditProfile = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [formData, setFormData] = useState({
    first_name: user.first_name || "",
    last_name: user.last_name || "",
    email: user.email || "",
    gender: user.gender || "",
    tanggal_lahir: user.tanggal_lahir || "",
    asal: user.asal || "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8000/auth/user/${user.id}`, formData);
      localStorage.setItem("user", JSON.stringify(formData));

      navigate("/profile");
    } catch (error) {
      console.error("Error updating user data", error);
    }
  };

  return (
    <div className={styles.editProfileContainer}>
      <h1>Edit Profile</h1>
      <form onSubmit={handleSubmit} className={styles.editProfileForm}>
        <div className={styles.formItem}>
          <label>First Name</label>
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formItem}>
          <label>Last Name</label>
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formItem}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formItem}>
          <label>Gender</label>
          <input
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formItem}>
          <label>Tanggal Lahir</label>
          <input
            type="date"
            name="tanggal_lahir"
            value={formData.tanggal_lahir}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formItem}>
          <label>Asal</label>
          <input
            type="text"
            name="asal"
            value={formData.asal}
            onChange={handleChange}
          />
        </div>
        <div className={styles.buttonContainer}>
          <button type="button" onClick={() => navigate("/profile")}>
            Cancel
          </button>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;

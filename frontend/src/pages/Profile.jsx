import React from "react";
import { Link } from "react-router-dom";
import styles from "./Profile.module.css"; // Create this CSS file for styling

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileHeader}>
        {user && user.foto ? (
          <img
            src={`data:image/png;base64,${user.foto}`}
            alt="User"
            className={styles.userPhoto}
          />
        ) : (
          <img
            src="../public/logo/default.png"
            alt="User"
            className={styles.userPhoto}
          />
        )}
      </div>
      <div className={styles.profileData}>
        <h2>Personal Data</h2>
        <div className={styles.profileItem}>
          <label>Full Name</label>
          <input
            type="text"
            value={`${user.first_name} ${user.last_name}`}
            readOnly
          />
        </div>
        <div className={styles.profileItem}>
          <label>Email</label>
          <input type="text" value={user.email} readOnly />
        </div>
        <div className={styles.profileItem}>
          <label>Gender</label>
          <input type="text" value={user.gender} readOnly />
        </div>
        <div className={styles.profileItem}>
          <label>Tanggal Lahir</label>
          <input type="text" value={user.tanggal_lahir} readOnly />
        </div>
        <div className={styles.profileItem}>
          <label>Asal</label>
          <input type="text" value={user.asal} readOnly />
        </div>
        <Link to="/edit-profile" className={styles.editProfileButton}>
          Edit Profile
        </Link>
      </div>
    </div>
  );
};

export default Profile;

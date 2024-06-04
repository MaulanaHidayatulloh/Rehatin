import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import Login from "../../formlogin/formlogin";
import Dropdown from "react-bootstrap/Dropdown";

function NavbarCom({ onLogout }) {
  const [show, setShow] = useState(false);
  const [userState, setUserState] = useState(null);
  const [isLoggedInState, setIsLoggedInState] = useState(false);
  const [activeNav, setActiveNav] = useState("home");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
    const storedActiveNav = localStorage.getItem("activeNav");

    if (storedUser && storedIsLoggedIn) {
      setUserState(JSON.parse(storedUser));
      setIsLoggedInState(true);
    } else {
      setUserState(null);
      setIsLoggedInState(false);
    }

    if (storedActiveNav) {
      setActiveNav(storedActiveNav);
    }
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUserLogin = (user) => {
    setUserState(user);
    setIsLoggedInState(true);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("isLoggedIn", true);
  };

  const handleUserLogout = () => {
    setUserState(null);
    setIsLoggedInState(false);
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
    onLogout();
  };

  useEffect(() => {
    const user = localStorage.getItem("user") || sessionStorage.getItem("user");
    const isLoggedIn =
      localStorage.getItem("isLoggedIn") ||
      sessionStorage.getItem("isLoggedIn");

    if (user && isLoggedIn) {
      setUserState(JSON.parse(user));
      setIsLoggedInState(JSON.parse(isLoggedIn));
    } else {
      setUserState(null);
      setIsLoggedInState(false);
    }
  }, []);

  const handleNavClick = (nav) => {
    setActiveNav(nav);
    localStorage.setItem("activeNav", nav);
  };

  return (
    <header className={styles.header}>
      <a href="/" className={styles.navbarLogo}>
        <img src="../public/logo/logo_rehatin.png" alt="logo" />
      </a>
      <nav className={styles.navbar}>
        <a
          href="/"
          className={`${styles.nav} ${
            activeNav === "home" ? styles.active : ""
          }`}
          onClick={() => handleNavClick("home")}
        >
          Home
        </a>
        <a
          href="/aboutUs"
          className={`${styles.nav} ${
            activeNav === "aboutUs" ? styles.active : ""
          }`}
          onClick={() => handleNavClick("aboutUs")}
        >
          About Us
        </a>
        <a
          href="/wishlist"
          className={`${styles.nav} ${
            activeNav === "wishlist" ? styles.active : ""
          }`}
          onClick={() => handleNavClick("wishlist")}
        >
          Wishlist
        </a>
        <a
          href="/blog"
          className={`${styles.nav} ${
            activeNav === "blog" ? styles.active : ""
          }`}
          onClick={() => handleNavClick("blog")}
        >
          Blog
        </a>
        {isLoggedInState ? (
          <div className={styles.userInfo}>
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                style={{
                  backgroundColor: "transparent",
                  border: "transparent",
                }}
              >
                {userState && userState.foto ? (
                  <img
                    src={`data:image/png;base64,${userState.foto}`}
                    alt="user"
                    className={styles.userPhoto}
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "100%",
                    }}
                  />
                ) : (
                  <img
                    src="../public/logo/default.png"
                    alt="user"
                    className={styles.userPhoto}
                    style={{ width: "50px", height: "50px" }}
                  />
                )}
                <span>{userState?.first_name}</span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/profile">Edit Profile</Dropdown.Item>
                <Dropdown.Item href="/edit-profile">Edit Profil</Dropdown.Item>
                <Dropdown.Item>
                  <button className={styles.logout} onClick={handleUserLogout}>
                    Log Out
                  </button>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        ) : (
          <button className={styles.login} onClick={handleShow}>
            Log In
          </button>
        )}
      </nav>
      <Login
        show={show}
        handleClose={handleClose}
        setUser={handleUserLogin}
        setIsLoggedIn={setIsLoggedInState}
      />
    </header>
  );
}

export default NavbarCom;
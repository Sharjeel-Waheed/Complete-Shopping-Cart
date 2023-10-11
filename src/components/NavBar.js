import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { allowUser } from "./Pages/Service";
import "./NavBar.css";

function NavBar() {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const navigate = useNavigate()


  const handleLogOut = async (e) => {
    e.preventDefault();
    try {
      const response = await allowUser();
      localStorage.removeItem('token', response.token);
      navigate('/login');

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <span><u>TNG.</u></span>
            <span className="icon">
            </span>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <button id="Logout-btn"
              onClick={handleLogOut}>Logout</button>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <span className="icon">
                <p>x</p>
              </span>
            ) : (
              <span className="icon">
                <p>...</p>
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
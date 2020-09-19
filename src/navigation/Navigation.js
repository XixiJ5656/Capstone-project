import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import authServices from "../services/authServices";

import "../App.css";

const Navigation = () => {
  const [navBackground, setNavBackground] = useState(false);
  const [currentUser, setCurrentUser] = useState(false);
  const [adminBoard, setAdminBoard] = useState(false);

  useEffect(() => {
    const user = authServices.getCurrentUser();
    if (user) {
      setCurrentUser(user);
      setAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setNavBackground(true);
      } else setNavBackground(false);
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  });

  const signOut = () => {
    authServices.signout();
  };

  return (
    <div className="navbar">
      <nav class="nav flex-column">
        <ul>
          <li>
            <Link to={"/"}>WY</Link>
          </li>
          <li className="nav-item dropdown">
            <a
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              href="#"
            >
              SHOP
            </a>
            <div class="dropdown-menu">
              <Link class="dropdown-item" to={"/shop"}>
                Shop
              </Link>
              <Link class="dropdown-item" to={"/admin"}>
                Admin
              </Link>
              <Link class="dropdown-item" to={"/user"}>
                User
              </Link>
              <div class="dropdown-divider"></div>
              <Link class="dropdown-item" to={"/user/cart"}>
                To my Cart
              </Link>
            </div>
          </li>
          <li>
            <NavLink to={"/cart"}>CART</NavLink>
          </li>
        </ul>
      </nav>
      {!currentUser ? (
        <div>
          <NavLink to={"/signin"}>SIGN IN</NavLink>
          <NavLink to={"/register"}>REGISTER</NavLink>
        </div>
      ) : (
        <Link to="/home" className="nav-link" onClick={signOut}>
          SIGN OUT
        </Link>
      )}
      {currentUser && (
        <ul>
          <li>
            <NavLink to={"/user/cart"}>CART</NavLink>
          </li>
          <li>
            <NavLink to={"/user/userinfo"}>
              {currentUser.username.toUpperCase()}
            </NavLink>
          </li>
        </ul>
      )}
      {adminBoard && <NavLink to={"/admin"}>Admin</NavLink>}
    </div>
  );
};

export default Navigation;
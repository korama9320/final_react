import React, { useState, useEffect } from "react";
import logo from "../../images/gym logo 4.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faShoppingBasket,
  faShop,
  faBars,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import Abdo from "./e-com.module.css";
import { useSelector } from "react-redux";
function Navbar(props) {
  ///////////////////login slide function/////////////////
  function loginform() {
    props.loginFlag((pre) => !pre);
  }
  ///////////////nav bar hide state//////////////
  let [show, setShow] = useState(true);

  ///////////////////////navbar scroll state///////////////////////
  let [scrol, setScrol] = useState(window.scrollY);

  ///////////////// navbar hide on scroll function//////////////////
  useEffect(() => {
    window.addEventListener("scroll", function () {
      setScrol(window.scrollY);
      if (scrol < window.scrollY) {
        return setShow(false);
      } else {
        return setShow(true);
      }
    });
  }, [scrol]);
  ///////////// navbare responsive hide state ////////////////
  let [showmen, setShowmen] = useState(false);
  ///////////////////navbar side menue responsive function/////////////////////
  function showmenue() {
    setShowmen((pre) => !pre);
  }
  let cart = useSelector((state) => state.cartReducer.cart);

  return (
    <nav className={Abdo.navbar} style={{ top: show ? "0" : "-70px" }}>
      <div className={Abdo.logo}>
        <img src={logo} alt="logo pic" className={Abdo.logoRest} />
        <h1 id={Abdo.logo}>
          GMS
          <span id="logoDecoration" style={{ color: "var(--prime)" }}>
            .
          </span>
        </h1>
      </div>
      <ul style={{ right: showmen ? "0" : "-50%" }}>
        {" "}
        <FontAwesomeIcon icon={faX} className={Abdo.fax} onClick={showmenue} />
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/About">About</NavLink>
        </li>
        <li>
          <NavLink to="/Diet">Diet</NavLink>
        </li>
        <li>
          <NavLink to="/Trainers">Trainers</NavLink>
        </li>
        <li>
          <NavLink to="/SignUp">SignUp</NavLink>
        </li>
        <li>
          <NavLink to="/profile">
            <FontAwesomeIcon icon={faUser} onClick={loginform} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/ecom/main">
            <FontAwesomeIcon icon={faShop}></FontAwesomeIcon>
          </NavLink>
        </li>
        <li>
          <NavLink to="/ecom/cart">
            <FontAwesomeIcon icon={faShoppingBasket} />
            <span
              style={{ color: "#ff5733", fontSize: "1rem", margin: "1rem" }}
            >
              {cart.length}
            </span>
          </NavLink>
        </li>
      </ul>{" "}
      <FontAwesomeIcon
        icon={faBars}
        className={Abdo.fabars}
        onClick={showmenue}
      />
    </nav>
  );
}

export default Navbar;

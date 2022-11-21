import React from "react";
import HamburgerIcon from "../../assets/hamburger.svg";
import { NavLink, Route, Routes } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      {React.useEffect(function() {
        window.addEventListener("resize", function() {
          if (this.window.innerWidth > 600) {
            document
              .getElementById("nav--links")
              .classList.remove("nav--show-links");
          }
        });

        document
          .getElementById("nav--logo")
          .addEventListener("click", function() {
            window.location = "/";
          });

        document
          .getElementById("nav--collapse")
          .addEventListener("click", function() {
            const links = document.getElementById("nav--links");
            links.classList.toggle("nav--show-links");
          });
      }, [])}
      <div id="nav" className="pad">
        <div id="nav--logo">
          <p style={{ color: "deeppink" }}>The</p>
          <h1 style={{ color: "deeppink" }}>Siren</h1>
        </div>
        <img id="nav--collapse" src={HamburgerIcon} height="25px"></img>
        <div id="nav--links">
          <NavLink to="/">
            <div className="navbar-item">Home</div>
          </NavLink>
          {/* <a href="#">Bollywood</a> */}
          <NavLink to="/bollywood">
            <div className="navbar-item">Bollywood</div>
          </NavLink>

          <NavLink to="/technology">
            <div className="navbar-item">Technology</div>
          </NavLink>

          <NavLink to="/hollywood">
            <div className="navbar-item">Hollywood</div>
          </NavLink>

          <NavLink to="/fitness">
            <div className="navbar-item">Fitness</div>
          </NavLink>

          <NavLink to="/food">
            <div className="navbar-item">Food</div>
          </NavLink>
        </div>
      </div>
    </>
  );
}

import React from "react";
import Navbar from "../../components/header/NavBar";

import Footer from "./Footer";
import "./Hollywood.css";
import holly from "../images/holly.jpeg";
import hollyStreet from "../images/holly-street.jpg";

function Hollywood() {
  return (
    <div id="home">
      <Navbar />

      <h3 className="hollywood-header">Hollywood</h3>

      <div className="card411">
        <img src={hollyStreet} className="field11" />

        <h5 className="catch11">Catch waves with an adventure guide</h5>
        <p className="guj11">
          Gujarat is vastly underrated and a mystery to us <br />
          why the region isn't more well-known as a tourist <br />
          destination.
          <br />
          Travel / August 21 2017
        </p>
      </div>

      <div className="card422">
        <img src={holly} className="field11" />

        <h5 className="catch11">Catch waves with an adventure guide</h5>
        <p className="guj11">
          Gujarat is vastly underrated and a mystery to us <br />
          why the region isn't more well-known as a tourist <br />
          destination.
          <br />
          Travel / August 21 2017
        </p>
      </div>

      <div className="card433">
        <img src={hollyStreet} className="field11" />

        <h5 className="catch11">Catch waves with an adventure guide</h5>
        <p className="guj11">
          Gujarat is vastly underrated and a mystery to us <br />
          why the region isn't more well-known as a tourist <br />
          destination.
          <br />
          Travel / August 21 2017
        </p>
      </div>

      <div className="advertisement-div11">
        <h3 className="ad-heading11">Advertisement</h3>
      </div>

      <div className="footer-holly">
        <Footer />
      </div>
    </div>
  );
}

export default Hollywood;

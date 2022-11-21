import React from "react";
import Navbar from "../../components/header/NavBar";
import Footer from "./Footer";
import "./Bollywood.css";
import fort1 from "../images/fort1.jpeg";
import fort2 from "../images/fort2.jpeg";

function Bollywood() {
  return (
    <div id="home">
      <Navbar />

      <h3 className="bolly-heading">Bollywood</h3>

      <div className="card41">
        <img src={fort1} className="field1" />

        <h5 className="catch1">Catch waves with an adventure guide</h5>
        <p className="guj1">
          Gujarat is vastly underrated and a mystery to us <br />
          why the region isn't more well-known as a tourist <br />
          destination.
          <br />
          Travel / August 21 2017
        </p>
      </div>

      <div className="card42">
        <img src={fort2} className="field1" />

        <h5 className="catch1">Catch waves with an adventure guide</h5>
        <p className="guj1">
          Gujarat is vastly underrated and a mystery to us <br />
          why the region isn't more well-known as a tourist <br />
          destination.
          <br />
          Travel / August 21 2017
        </p>
      </div>

      <div className="card43">
        <img src={fort1} className="field1" />

        <h5 className="catch1">Catch waves with an adventure guide</h5>
        <p className="guj1">
          Gujarat is vastly underrated and a mystery to us <br />
          why the region isn't more well-known as a tourist <br />
          destination.
          <br />
          Travel / August 21 2017
        </p>
      </div>

      <div className="advertisement-div1">
        <h3 className="ad-heading1">Advertisement</h3>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Bollywood;

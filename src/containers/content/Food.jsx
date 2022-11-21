import React from "react";
import Navbar from "../../components/header/NavBar";

import Footer from "./Footer";
import "./Food.css";
import food1 from "../images/food1.jpeg";
import food2 from "../images/food2.jpeg";
import food3 from "../images/food3.jpeg";
import food4 from "../images/food4.jpeg";
import food5 from "../images/food5.jpeg";

function Food() {
  return (
    <div id="home">
      <Navbar />

      <h3 className="food-header">Food</h3>

      <div className="card-11">
        <img src={food1} className="river-img-11" />

        <h5 className="joshua-heading1">Joshua Tree Overnight Adventure</h5>
        <p className="gujarat-para1">
          Gujarat is vastly underrated and a mystery to us why the region isn't
          more well-known as a tourist destination.
          <br />
          <br />
          Travel / August 21 2017
        </p>
      </div>

      <div className="card-22">
        <img src={food2} className="river-img-11" />

        <h5 className="joshua-heading1">Joshua Tree Overnight Adventure</h5>
        <p className="gujarat-para1">
          Gujarat is vastly underrated and a mystery to us why the region isn't
          more well-known as a tourist destination.
          <br />
          <br />
          Travel / August 21 2017
        </p>
      </div>

      <div className="card-33">
        <img src={food3} className="river-img-11" />

        <h5 className="joshua-heading1">Joshua Tree Overnight Adventure</h5>
        <p className="gujarat-para1">
          Gujarat is vastly underrated and a mystery to us why the region isn't
          more well-known as a tourist destination.
          <br />
          <br />
          Travel / August 21 2017
        </p>
      </div>

      <h3 className="article-heading111">Latest Articles</h3>

      <div className="card-444">
        <img src={food4} className="field-img111" />

        <h5 className="catch-head111">Catch waves with an adventure guide</h5>
        <p className="guj-para111">
          Gujarat is vastly underrated and a mystery to us <br />
          why the region isn't more well-known as a tourist <br />
          destination.
          <br />
          Travel / August 21 2017
        </p>
      </div>

      <div className="card-555">
        <img src={food5} className="field-img111" />

        <h5 className="catch-head111">Catch waves with an adventure guide</h5>
        <p className="guj-para111">
          Gujarat is vastly underrated and a mystery to us <br />
          why the region isn't more well-known as a tourist <br />
          destination.
          <br />
          Travel / August 21 2017
        </p>
      </div>

      <div className="card-666">
        <img src={food1} className="field-img111" />

        <h5 className="catch-head111">Catch waves with an adventure guide</h5>
        <p className="guj-para111">
          Gujarat is vastly underrated and a mystery to us <br />
          why the region isn't more well-known as a tourist <br />
          destination.
          <br />
          Travel / August 21 2017
        </p>
      </div>

      <div className="advertisement-div111">
        <h3 className="ad-heading111">Advertisement</h3>
      </div>

      <div className="footer-food">
        <Footer />
      </div>
    </div>
  );
}

export default Food;

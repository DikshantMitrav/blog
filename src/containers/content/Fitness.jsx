import React from "react";
import Navbar from "../../components/header/NavBar";

import Footer from "./Footer";
import "./Fitness.css";
import fitness1 from "../images/fitness1.jpeg";
import fitness2 from "../images/fitness2.jpeg";
import person2 from "../images/person2.jpeg";
import share from "../images/share.png";
import like from "../images/like.png";

function Fitness() {
  function likeClick() {
    alert("Article liked!");
  }

  return (
    <div id="home">
      <Navbar />

      <h3 className="fitness-header">Fitness</h3>

      <div className="ways-div1">
        <img src={person2} className="person-img" />

        <p className="name-para1">
          Aaron Ramsey
          <br />
          Feb 27, 2020
        </p>

        <div className="icons_div1">
          <i className="fa-brands fa-facebook"></i>
          &nbsp; &nbsp;
          <i className="fa-brands fa-instagram"></i>
          &nbsp; &nbsp;
          <i className="fab fa-linkedin-in"></i>
          &nbsp; &nbsp;
          <i className="fab fa-slack-hash"></i>
          &nbsp; &nbsp;
          <i className="fab fa-github"></i>
          &nbsp; &nbsp;
          <i className="fab fa-whatsapp"></i>
        </div>

        <img src={share} className="share-img1" />
        <p className="share-para1">Share this article</p>

        <img onClick={likeClick} src={like} className="like-img1" />
        <p className="like-para1">Like this article</p>

        <img src={fitness1} className="react-img1" />

        <p className="animate-para1">
          Physical fitness is a state of health and well-being and, more
          specifically, the ability
          <br />
          to perform aspects of sports, occupations and daily activities.
          Physical fitness is generally
          <br />
          achieved through proper nutrition, moderate-vigorous physical
          exercise, and sufficient
          <br />
          rest along with a formal recovery plan.
        </p>

        <img src={fitness2} className="code-img1" />

        <p className="info-para1">
          A healthy body and mind are essential to achieve a complete wellbeing.
          If we are
          <br />
          healthy, we can resist our bodies from being attacked by germs. Our
          bodies are really
          <br />
          sensitive and therefore, must be handled with necessary precautions.
          We can develop
          <br />
          healthy habits like eating and sleeping on time to boost our overall
          health. This helps
          <br />
          in becoming a healthier version of ourselves. Holistic growth can be
          achieved if we focus
          <br />
          on all the aspects of our health such as nutrition, wellness,
          spirituality and mental health.
        </p>
      </div>

      <div className="advertisement-div11">
        <h3 className="ad-heading11">Advertisement</h3>
      </div>

      <div className="footer-fitness">
        <Footer />
      </div>
    </div>
  );
}

export default Fitness;

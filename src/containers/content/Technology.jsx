import React from "react";
import Navbar from "../../components/header/NavBar";
import Footer from "./Footer";
import "./Technology.css";
import person1 from "../images/person1.jpeg";
import react1 from "../images/react1.png";
import code1 from "../images/code1.png";
import share from "../images/share.png";
import like from "../images/like.png";

function Technology() {
  function likeClick() {
    alert("Article liked!");
  }

  return (
    <div id="home">
      <Navbar />

      <h3 className="animate-head">5 ways to animate a React App</h3>

      <div className="ways-div">
        <img src={person1} className="person-img" />

        <p className="name-para">
          Dmitry Nozhenko
          <br />
          Jan 28, 2019
        </p>

        <div className="icons_div">
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

        <img src={share} className="share-img" />
        <p className="share-para">Share this article</p>

        <img onClick={likeClick} src={like} className="like-img" />
        <p className="like-para">Like this article</p>

        <img src={react1} className="react-img" />

        <p className="animate-para">
          Animation in ReactJS app is a popular topic and there are many ways to
          create
          <br /> different types of animations. Many developers create animation
          exclusively using
          <br /> CSS and adding classes to HTML Tags. This is a great way and
          you should use it.
          <br />
          If you want to create complex animations you can pay attention to
          GreenSock.
          <br />
          GreenSock is the most powerful animation platform. There are also a
          lot of libraries,
          <br />
          components for creating animation in React.
          <br />
          <br />
          Lets talk about them.
        </p>

        <img src={code1} className="code-img" />

        <p className="info-para">
          This is a React code snippet in which the React module is imported
          from the React
          <br />
          library. The ReactScreenshotTest module is also imported from the
          react-screenshot-test
          <br />
          library. The FancyButton component is also imported with external
          import. We have
          <br />
          applied styling on the components and the React elements along with
          the .shoot and .run
          <br />
          have also been used.
        </p>
      </div>

      <div className="footer-block">
        <Footer />
      </div>
    </div>
  );
}

export default Technology;

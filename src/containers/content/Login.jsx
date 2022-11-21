import React from "react";
import Navbar from "../../components/header/NavBar";

import Footer from "./Footer";
import "./Login.css";

function Login() {
  function signIn() {
    alert("Your account has been created!");
  }

  return (
    <>
      <Navbar />

      <div className="login-div1">
        <h3 className="sign-head">Sign in to your Account</h3>

        <div className="icons-div">
          <a href="https://www.facebook.com/login/">
            <i className="fa-brands fa-facebook"></i>
          </a>
          &nbsp; &nbsp;
          <a
            href="https://accounts.google.com/ServiceLogin/signinchooser?elo=1&ifkv=ARgdvAuGEqcfQh35LaXmCnyI5qjF4ygYAwtx5-zfUAQd0pSvgrz1412ZU61wqS6XVkuggfoKRJMv&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
            style={{ color: "#d72323" }}
          >
            <i class="fa-brands fa-google-plus-g"></i>
          </a>
          &nbsp; &nbsp;
          <a
            href="https://www.linkedin.com/login?session_redirect=https%3A%2F%2Fin%2Elinkedin%2Ecom%2Fin%2Faryandev-shourie-175025229&fromSignIn=true&trk=public_profile_nav-header-signin"
            style={{ color: "#2962ff" }}
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>

        <p className="email-para">or use your email account</p>

        <input
          type="email"
          className="email-input"
          placeholder="Enter your email"
        />
        <input
          type="password"
          className="pass-input"
          placeholder="Enter your password"
        />

        <button onClick={signIn} className="btn btn-dark btn-md sign-btn">
          Sign up
        </button>
      </div>

      <div className="login-div2">
        <h2 className="hello-head">
          Hello there! <br /> Join our Community.
        </h2>

        <p className="contri-para">Sign up and create your new account!</p>
      </div>

      <div className="footer-login">
        <Footer />
      </div>
    </>
  );
}

export default Login;

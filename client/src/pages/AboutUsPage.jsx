import React from "react";
import Header from "../components/Header";
import Way from "../components/Way";
import Footer from "../components/Footer";
import "../styles/main.css";

export default function AboutUsPage() {
  return (
    <div>
      <Header />
      <Way />

      <div className="about-us__wrap">
        <div className="about-us__img">
          <img src="#" alt="Производство мешков"></img>
        </div>
        <div className="about-us__text">
          <h2>О компании</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

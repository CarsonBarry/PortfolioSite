import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* NavBar Container test */}
      <div id="navBar">
        <div id="navBarLeft">{/* NavBar Left Content */}</div>
        <div id="navBarCenter">{/* NavBar Center Content */}</div>
        <div id="navBarRight">{/* NavBar Right Content */}</div>
      </div>{" "}
      {/* End NavBar */}
      {/* Main Left Container */}hnjm
      <div id="mainLeft">
        <div class="container">
          <h1>TEST</h1>
        </div>
      </div>{" "}
      navBar
      {/* End Main Left */}
      {/* Main Right Container */}
      <div id="mainRight">
        <div class="container">
          {/* Content */}
          <h1>TEST</h1>
          <p>test test test</p>
        </div>
      </div>{" "}
      {/* End Main Right */}
      {/* Footer Container */}
      <div id="footer">
        <div id="footerLeft">{/* NavBar Footer Content */}</div>
        <div id="footerRight">{/* NavBar Right Content */}</div>
        <div id="footerBottomCenter">
          {/* NavBar Center Content */}
          <h1>Footer</h1>
        </div>
      </div>{" "}
      {/* End Footer */}
      {/* End App */}{" "}
    </div>
  );
}

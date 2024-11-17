import React from "react";
import ReactDOM from "react-dom/client";

/*
 ! Header
   * logo
   * navigation Links
 ! Main
   * Search container
   * Search button
   * Restaurant container
   * restaurant card
 ! Footer
   * social media icons
   * copyright information
*/

const root = ReactDOM.createRoot(document.getElementById("root"));

const Header = () => {
  return (
    <div className="Header">
      <div className="logoContainer">
        <img
          className="main_Logo"
          src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg"
        ></img>
      </div>
      <nav className="navContainer">
        <ul className="navContainerUL">
          <li>Home</li>
          <li>About</li>
          <li>Contact US</li>
          <li>Cart</li>
          <li>Help</li>
        </ul>
      </nav>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="appLayoutContainer">
      <Header />
    </div>
  );
};

root.render(<AppLayout />);

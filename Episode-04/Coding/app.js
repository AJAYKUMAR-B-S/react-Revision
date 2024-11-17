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
          src="https://img.freepik.com/free-vector/food-drink-hand-drawn-flat-healthy-food-logo_23-2149632253.jpg?semt=ais_hybrid"
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

const RestaurantCard = () => {
  return (
    <div className="restaurantCardContainer">
      <div className="restaurantCardIMGContainer">
        <img
          className="restaurantCardIMG"
          alt="restaurantCardIMG"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/yeednzto1jusnnhswke0"
        ></img>
      </div>
      <div className="restaurantCardINFOContainer">
        <h3>RestaurantName</h3>
        <div className="ratingAndDeliveryTimeContainer">
          <p>4.3</p>
          <p>20 min</p>
        </div>
        <p className="cuisines">
          Biryani, Chinese, Indian, Kebabs, Tandoor Mehdipatnam
        </p>
      </div>
    </div>
  );
};
const Main = () => {
  return (
    <main className="mainContainer">
      <div className="searchContainer"></div>
      <div className="restaurantContainer">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </main>
  );
};
const AppLayout = () => {
  return (
    <div className="appLayoutContainer">
      <Header />
      <Main />
    </div>
  );
};

root.render(<AppLayout />);

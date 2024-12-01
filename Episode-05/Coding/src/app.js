import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./Components/Header.js";
import Main from "./Components/Main.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  return (
    <div className="appLayoutContainer">
      <Header />
      <Main />
    </div>
  );
};

root.render(<AppLayout />);

x = 6.4;

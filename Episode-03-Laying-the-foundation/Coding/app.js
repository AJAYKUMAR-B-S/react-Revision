import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "This is React Element"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

const jsxHeading = (
  <h1 id="heading">
    <p>Hello</p>This is JSX heading
  </h1>
);

root.render(jsxHeading);

console.log(heading);
console.log(jsxHeading);

const HeadingComponent = () => {
  return (
    <h2 id="heading">
      This is a heading component using Functional component
      <HeadingComponent1 />
    </h2>
  );
};

const firstName = "Ajay";
const HeadingComponent1 = () => (
  <h1 id="head">
    <h3>{firstName}</h3>
    <HeadingComponent />
    {HeadingComponent()}
    Short Form Of Functional Component
  </h1>
);

root.render(<HeadingComponent1 />);

{
  /* <div class="parentDiv">
      <div class="childDiv">
        <h1 class="h1"></h1>
      </div>
    </div> */
}

const parent = React.createElement(
  "div",
  { className: "parentDiv" },
  React.createElement(
    "div",
    { className: "childDiv" },
    React.createElement("h1", {}, "Inside Parent And Child Div")
  )
);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world! from React"
);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

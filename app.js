const heading = React.createElement("h1", { id: "heading" }, "Hello world!");
const parentDiv = React.createElement("div", { id: "parent" }, [
  heading,
  heading,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parentDiv);

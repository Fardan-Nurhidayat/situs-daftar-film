import Button from "./components/Button/index.js";
import List from "./components/List/index.js";
document.addEventListener("DOMContentLoaded", () => {
  const myButton = new Button("secondary");
  document.getElementById("app").appendChild(myButton.render());
  const myList = new List();
  document.getElementById("app").appendChild(myList.render());
});

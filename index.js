import route from "./utils/route.js";
import "./utils/fertchapi.js";
const handleHash = () => {
  const hash = window.location.hash.substring(1);
  route(hash);
};

document.addEventListener("DOMContentLoaded", () => {
  history.replaceState(null, null, "#");
  handleHash();
});

window.addEventListener("hashchange", handleHash);

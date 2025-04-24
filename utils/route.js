import Homepage from "../pages/homepage/index.js";
import Detailpage from "../pages/detailpage/index.js";
const pages = {
  home: new Homepage().render(),
  detail: new Detailpage().render(),
};

const route = hash => {
  const app = document.getElementById("app");
  app.innerHTML = "";
  const hasRoute = hash === "" ? "home" : hash.split("?")[0];
  const isAvailable = pages.hasOwnProperty(hasRoute);
  if (isAvailable) {
    app.appendChild(pages[hasRoute]);
  } else {
    alert("Pages not found");
  }
};

export default route;

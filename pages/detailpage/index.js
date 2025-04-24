import Button from "../../components/Button/index.js";
import { fetchApi } from "../../utils/fertchapi.js";

class Detailpage {
  constructor() {
    this.state = {
      selectedItem: {},
      isLoding: true,
    };
    this.handleClick = this.handleClick.bind(this);
    this.init();
  }
  handleClick() {
    window.location.hash = "";
  }
  init() {
    this.getDataMovie();
    this.render();
  }

  getDataMovie() {
    const queryString = window.location.hash.split("?")[1];
    console.log(queryString);
    const urlPath = `titles/${queryString}`;
    fetchApi("GET", urlPath).then(result => {
      console.log(result.results);
      this.setState({ isLoding: false });
    });
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }
  render() {
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    h1.innerText = "Detailpage";
    const button = new Button({
      text: "Go back",
      variant: "secondary",
      onclick: this.handleClick,
    });
    div.appendChild(h1);
    div.appendChild(button.render());
    return div;
  }
}

export default Detailpage;

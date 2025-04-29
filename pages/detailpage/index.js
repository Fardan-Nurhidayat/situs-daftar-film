import Button from "../../components/Button/index.js";
import { fetchApi } from "../../utils/fertchapi.js";
import Image from "../../components/Image/index.js";
class Detailpage {
  constructor() {
    this.state = {
      selectedItem: {},
      movieRate: {},
      isLoding: true,
    };
    // this.handleClick = this.handleClick.bind(this);
    this.div = document.createElement("div");
    this.init();
  }
  handleClick() {
    window.location.hash = "";
  }
  init() {
    this.getDataMovie();
    this.render();
  }
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }
  async getDataMovie() {
    const queryString = window.location.hash.split("?")[1];
    const urlPath = `titles/${queryString}`;
    console.log(urlPath);
    await fetchApi("GET", urlPath).then(result => {
      this.setState({ selectedItem: result.results });
    });
    // console.log(this.state.selectedItem);
    const urlPathRating = `${urlPath}/ratings`;
    await fetchApi("GET", urlPathRating).then(result => {
      this.setState({ movieRate: result.results });
    });
    this.setState({ isLoding: false });
  }

  render() {
    this.div.innerHTML = "";
    const h1 = document.createElement("h1");
    h1.innerText = "Detailpage";
    const button = new Button({
      text: this.state.selectedItem.id,
      variant: "secondary",
      onclick: this.handleClick,
    });
    this.div.appendChild(h1);
    this.div.appendChild(button.render());
    this.div.appendChild(
      new Image({
        src: this.state.selectedItem.primaryImage?.url,
        alt: this.state.selectedItem.primaryImage?.caption?.plainText,
      }).render()
    );
    return this.div;
  }
}

export default Detailpage;

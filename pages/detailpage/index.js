import Button from "../../components/Button/index.js";

class Detailpage {
  constructor() {
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    window.location.hash = "";
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

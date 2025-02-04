class Button {
  constructor(variant = "primary") {
    this.handleClick = this.handleClick.bind(this);
    this.variant = variant;
  }

  handleClick() {
    if (this.variant === "primary") {
      console.log("Primary button clicked");
    } else {
      console.log("button clicked");
    }
  }
  render() {
    const button = document.createElement("button");
    button.innerText = "Click me";
    button.onclick = this.handleClick;
    return button;
  }
}
export default Button;

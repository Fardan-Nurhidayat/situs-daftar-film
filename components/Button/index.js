class Button {
  constructor(props) {
    const { text, variant, onclick, disabled } = props;
    this.onclick = onclick;
    this.variant = variant;
    this.text = text;
    this.disabled = disabled;
  }
  render() {
    const button = document.createElement("button");
    button.innerText = this.text;
    button.className = "btn btn-" + this.variant;
    button.onclick = this.onclick;
    button.disabled = this.disabled;
    return button;
  }
}
export default Button;

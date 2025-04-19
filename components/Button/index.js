class Button {
  constructor(props) {
    const { text, variant, onclick, className, disabled } = props;
    this.onclick = onclick;
    this.className = className;
    this.variant = variant;
    this.text = text;
    this.disabled = disabled;
  }
  render() {
    const button = document.createElement("button");
    button.innerText = this.text;
    button.className = `btn btn-${this.variant} ${this.className}`;
    button.onclick = this.onclick;
    button.disabled = this.disabled;
    return button;
  }
}
export default Button;

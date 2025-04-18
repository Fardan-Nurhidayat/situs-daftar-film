class Typography {
  constructor(props) {
    const { variant, children } = props;
    this.variant = variant;
    this.children = children;
  }

  variants = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    p: "p",
    span: "span",
  };
  render() {
    const container = document.createElement(this.variants[this.variant]);
    container.innerHTML = this.children;
    // console.log(container);
    return container;
  }
}

export default Typography;

class Image {
  constructor(props) {
    const { src, alt, className } = props;
    this.image = document.createElement("img");
    this.image.src = src;
    this.image.alt = alt;
    this.image.className = className;
  }

  render() {
    return this.image;
  }
}

export default Image;

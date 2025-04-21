export default class Loader {
  constructor() {
    this.loaderContainer = document.createElement("div");
    this.loaderContainer.className = "loader-container";
  }

  render() {
    return this.loaderContainer;
  }
}

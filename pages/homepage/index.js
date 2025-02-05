import Typography from "../../components/typography/index.js";
import Button from "../../components/Button/index.js";
import { fetchApi } from "../../utils/fertchapi.js";
import FilterMovie from "../../components/molecules/FilterMovie.js";
class Homepage {
  constructor() {
    this.state = {
      count: 0,
      isLoading: false,
    };
    this.div = document.createElement("div");
  }
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  getTitleMovie() {
    this.setState({ isLoading: true });
    fetchApi("GET", "titles").then(result => {
      console.log(result);
      this.setState({ isLoading: false });
    });
  }
  render() {
    this.div.innerHTML = "";
    const h1 = new Typography({
      variant: "h1",
      children: "Homepage",
    });

    const filterMovie = new FilterMovie({
      submitFilter: () => this.getTitleMovie(),
      isLoading: this.state.isLoading,
    });

    this.div.appendChild(h1.render());
    this.div.appendChild(filterMovie.render());
    // this.div.appendChild(button.render());
    return this.div;
    // return h1.render();
  }
}

export default Homepage;

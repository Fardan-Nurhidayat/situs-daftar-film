import Typography from "../../components/typography/index.js";
import Button from "../../components/Button/index.js";
import { fetchApi } from "../../utils/fertchapi.js";
import FilterMovie from "../../components/molecules/FilterMovie.js";
import MovieList from "../../components/Movielist/movielist.js";
class Homepage {
  constructor() {
    this.state = {
      count: 0,
      isLoading: false,
      filterType: "",
      filterYear: "",
      movieList: [],
    };
    this.div = document.createElement("div");
    this.init();
  }
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  getDataMovie() {
    this.setState({ isLoading: true });
    let urlPath = "titles";
    if (this.state.filterType != "") {
      urlPath += `?genre=${this.state.filterType}`;
      if (this.state.filterYear != "") {
        urlPath += `&year=${this.state.filterYear}`;
      }
    } else if (this.state.filterYear != "") {
      urlPath += `?year=${this.state.filterYear}`;
    }
    fetchApi("GET", urlPath).then(result => {
      console.log(result.results);
      this.setState({ movieList: result.results });
      this.setState({ isLoading: false });
    });
  }

  init() {
    this.getDataMovie();
    this.render();
  }

  render() {
    this.div.innerHTML = "";
    const h1 = new Typography({
      variant: "h1",
      children: "Homepage",
    });

    const filterMovie = new FilterMovie({
      submitFilter: () => this.getDataMovie(),
      setType: value => this.setState({ filterType: value }),
      setYear: value => this.setState({ filterYear: value }),
      year: this.state.filterYear,
      type: this.state.filterType,
      isLoading: this.state.isLoading,
    });

    this.div.appendChild(h1.render());
    this.div.appendChild(filterMovie.render());
    // console.log(new MovieList({ movieItems: this.state.movieList }));
    this.div.appendChild(
      new MovieList({ movieItems: this.state.movieList }).render()
    );
    // this.div.appendChild(button.render());
    return this.div;
    // return h1.render();
  }
}

export default Homepage;

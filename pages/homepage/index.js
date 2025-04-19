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
      page: 1,
    };
    this.div = document.createElement("div");
    this.init();
  }
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  getDataMovie(type = "get") {
    this.setState({ isLoading: true });
    let urlPath = `titles/x/upcoming?page=${this.state.page}&limit=4`;
    if (this.state.filterType != "") {
      urlPath += `?genre=${this.state.filterType}`;
      if (this.state.filterYear != "") {
        urlPath += `&year=${this.state.filterYear}`;
      }
    } else if (this.state.filterYear != "") {
      urlPath += `?year=${this.state.filterYear}`;
    }
    fetchApi("GET", urlPath).then(result => {
      // console.log(result.results);
      if (type == "get") {
        this.setState({ movieList: result.results });
      } else {
        this.setState({
          movieList: [...this.state.movieList, ...result.results],
        });
        console.log(this.state.movieList);
      }
      this.setState({ isLoading: false });
    });
  }

  init() {
    this.getDataMovie();
    this.render();
  }

  loadHandler() {
    this.setState({ isLoading: true });
    this.setState({ page: this.state.page + 1 });
    this.getDataMovie("load");
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
      new Typography({
        variant: "h1",
        children: "Upcoming Movies",
      }).render()
    );
    this.div.appendChild(
      new MovieList({
        movieItems: this.state.movieList,
        loadMoreAction: () => this.loadHandler(),
      }).render()
    );
    // this.div.appendChild(button.render());
    return this.div;
    // return h1.render();
  }
}

export default Homepage;

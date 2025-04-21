import Button from "../Button/index.js";
import Loader from "../Loader/index.js";
import MovieItems from "../MovieItem/index.js";
import Typography from "../typography/index.js";
class MovieList {
  constructor(props) {
    const { movieItems, loadMoreAction, isLoading } = props;
    this.movieItems = movieItems;
    this.isLoading = isLoading;
    this.loadMoreAction = loadMoreAction;
    this.movieContainer = document.createElement("div");
    this.movieWrapper = document.createElement("div");
    this.movieContainer.className = "movie-list";
  }

  render() {
    this.movieItems.map(movie => {
      const titleMovie = new MovieItems({
        movie,
      });
      this.movieContainer.appendChild(titleMovie.render());
    });
    this.movieWrapper.appendChild(this.movieContainer);
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "button-container";
    buttonContainer.appendChild(
      new Button({
        variant: "action",
        text: this.isLoading ? new Loader("").render() : "Load More",
        className: "load-more",
        disabled: this.isLoading,
        onclick: () => this.loadMoreAction(),
      }).render()
    );
    this.movieWrapper.appendChild(buttonContainer);
    return this.movieWrapper;
  }
}

export default MovieList;

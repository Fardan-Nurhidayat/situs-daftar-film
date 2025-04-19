import MovieItems from "../MovieItem/index.js";
import Typography from "../typography/index.js";
class MovieList {
  constructor(props) {
    const { movieItems } = props;
    this.movieItems = movieItems;
    this.movieContainer = document.createElement("div");
    this.movieContainer.className = "movie-list";
  }

  render() {
    this.movieItems.map(movie => {
      const titleMovie = new MovieItems({
        movie,
      });
      this.movieContainer.appendChild(titleMovie.render());
    });
    return this.movieContainer;
  }
}

export default MovieList;

import Image from "../Image/index.js";
import Typography from "../typography/index.js";
class MovieItems {
  constructor(props) {
    const { movie } = props;
    this.movie = movie;
    this.movieItemsContainer = document.createElement("div");
    this.movieItemsContainer.className = "movie-card";
    this.movieItemsContainer.onclick = () =>
      (location.hash = `detail?${this.movie.id}`);
  }

  render() {
    // console.log(this.movie);
    const imgContainer = document.createElement("div");
    imgContainer.className = "img-container";
    imgContainer.appendChild(
      new Image({
        src: this.movie.primaryImage?.url,
        alt: this.movie.primaryImage?.caption.plainText,
        className: "img-movie",
      }).render()
    );

    this.movieItemsContainer.appendChild(imgContainer);

    const infoContainer = document.createElement("div");
    infoContainer.className = "info-film";
    infoContainer.appendChild(
      new Typography({
        variant: "h4",
        children: this.movie.originalTitleText?.text,
      }).render()
    );
    infoContainer.appendChild(
      new Typography({
        variant: "h5",
        children: this.movie.releaseYear?.year,
      }).render()
    );
    this.movieItemsContainer.appendChild(infoContainer);
    return this.movieItemsContainer;
  }
}

export default MovieItems;

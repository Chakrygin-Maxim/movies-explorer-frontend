import "./Movies.css";
import { movies } from "../../utils/movies";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies(props) {
  return (
    <section className='movies'>
      <SearchForm />
      <MoviesCardList movies={movies} savedMovies={false} />
    </section>
  );
}

export default Movies;

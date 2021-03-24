import "./SavedMovies.css";
import { savedMovies } from "../../utils/savedMovies";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies(props) {
  return (
    <section className='savedMovies'>
      <SearchForm />
      <MoviesCardList movies={savedMovies} savedMovies={true} />
    </section>
  );
}

export default SavedMovies;

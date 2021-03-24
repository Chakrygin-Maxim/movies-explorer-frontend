import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  return (
    <div className='moviesCardList'>
      <section className='moviesCardList-list'>
        {props.movies.map((item) => (
          <MoviesCard
            key={item._id}
            savedMovies={props.savedMovies}
            {...item}
          />
        ))}
      </section>
      <div className='moviesCardList__footer'>
        {props.savedMovies || (
          <button className='moviesCardList__more'>Ещё</button>
        )}
      </div>
    </div>
  );
}

export default MoviesCardList;

import "./MoviesCard.css";
import { useState } from "react";

function MoviesCard(props) {
  const [isLike, setIsLike] = useState(false);

  function handleOnFilmLike(evt) {
    setIsLike(!isLike);
  }

  return (
    <div className='moviesCardList__card-item'>
      <img className='moviesCard__pic' src={props.image} alt='Обложка фильма' />
      <div className='moviesCard__about'>
        <p className='moviesCard__name'>{props.description}</p>
        <button
          className={`moviesCard__button-like ${
            isLike && "moviesCard__button-like_status_liked"
          } ${props.savedMovies && "moviesCard__button-delete"}`}
          onClick={handleOnFilmLike}
        ></button>
      </div>
      <span className='moviesCard__direction'>{props.duration}</span>
    </div>
  );
}
export default MoviesCard;

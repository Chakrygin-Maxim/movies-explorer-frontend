import "./MoviesCard.css";
import { useState } from "react";

function MoviesCard(props) {
  const [isLike, setIsLike] = useState(false);

  function handleOnFilmLike(evt) {
    setIsLike(!isLike);
  }

  return (
    <div className='moviesCardList__card-item'>
      <img className='moviesCard__pic' src={props.photo} alt='Обложка фильма' />
      <div className='moviesCard__about'>
        <p className='moviesCard__name'>{props.name}</p>
        <button
          className={`moviesCard__button-like ${
            isLike && "moviesCard__button-like_status_liked"
          }`}
          onClick={handleOnFilmLike}
        ></button>
      </div>
      <span className='moviesCard__direction'>{props.direction}</span>
    </div>
  );
}
export default MoviesCard;

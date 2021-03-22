import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation(props) {
  return (
    <div className='navigation'>
      {!props.loggedIn ? (
        <Link to='/signup' className='navigation__link navigation__signup'>
          Регистрация
        </Link>
      ) : (
        <nav className='navigation__container'>
          <Link
            to='/movies'
            className='navigation__item navigation__link navigation__movies'
          >
            Фильмы
          </Link>
          <Link
            to='/saved-movies'
            className='navigation__item navigation__link navigation__saved-movies'
          >
            Сохранённые фильмы
          </Link>
        </nav>
      )}
    </div>
  );
}

export default Navigation;

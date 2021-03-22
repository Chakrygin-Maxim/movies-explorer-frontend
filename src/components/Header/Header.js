import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/header-logo.svg";

function Header(props) {
  const { pathname } = useLocation();

  return (
    <header className='header'>
      <a href='/' className='header__link'>
        <img
          src={logo}
          alt='Основное лого сайта'
          className='header__logo'
        ></img>
      </a>
      <div className='header__container'>
        {pathname === "/" ? (
          <>
            <Link className='header__link header__text' to={"/signup"}>
              Регистрация
            </Link>
            <Link
              className='header__button-login header__link header__text'
              to={"/signin"}
            >
              Войти
            </Link>{" "}
          </>
        ) : (
          <div />
        )}
        {pathname === "/movies" ? (
          <Link
            className='header__button-account header__link header__text'
            to={"/profile"}
          >
            Аккаунт
          </Link>
        ) : (
          <div />
        )}
      </div>
    </header>
  );
}

export default Header;

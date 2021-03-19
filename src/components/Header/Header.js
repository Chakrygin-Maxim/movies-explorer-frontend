import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../images/header-logo.svg";

function Header(props) {
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
        <Link className='header__link header__text' to={"/signup"}>
          Регистрация
        </Link>
        <Link
          className='header__button-login header__text header__link'
          to={"/signin"}
        >
          Войти
        </Link>
      </div>
    </header>
  );
}

export default Header;

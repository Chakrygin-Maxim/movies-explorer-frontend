import "./Header.css";
import Navigation from "../Navigation/Navigation";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/header-logo.svg";

function Header(props) {
  const { pathname } = useLocation();
  const pathTo = `${pathname === "/" ? "/signin" : "/profile"}`;
  const buttonData =
    pathname === "/"
      ? { text: "Войти", style: "login" }
      : { text: "Аккаунт", style: "account" };

  return (
    <header className='header'>
      <Link href='/' className='header__link'>
        <img
          src={logo}
          alt='Основное лого сайта'
          className='header__logo'
        ></img>
      </Link>
      <div className='header__container'>
        <Navigation loggedIn={props.loggedIn} />
        <Link
          className={`header__link header__button-${buttonData.style}`}
          to={pathTo}
        >
          {buttonData.text}
        </Link>
      </div>
    </header>
  );
}

export default Header;

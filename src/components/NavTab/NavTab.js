import "./NavTab.css";
import { Link } from "react-router-dom";

function NavTab(props) {
  return (
    <>
      <Link className='navtab__link navtab__link-text' to={"/"}>
        О проекте
      </Link>
      <Link className='navtab__link navtab__link-text' to={"/"}>
        Технологии
      </Link>
      <Link className='navtab__link navtab__link-text' to={"/"}>
        Студент
      </Link>
    </>
  );
}

export default NavTab;

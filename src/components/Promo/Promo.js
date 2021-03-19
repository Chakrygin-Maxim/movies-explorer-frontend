import "./Promo.css";
import { Link } from "react-router-dom";

function Promo(props) {
  return (
    <section className='promo'>
      <h1 className='promo__text'>
        Учебный проект студента факультет Веб-разработки
      </h1>
      <div className='promo__container'>
        <Link className='promo__link promo__link-text' to={"/"}>
          О проекте
        </Link>
        <Link className='promo__link promo__link-text' to={"/"}>
          Технологии
        </Link>
        <Link className='promo__link promo__link-text' to={"/"}>
          Студент
        </Link>
      </div>
    </section>
  );
}

export default Promo;

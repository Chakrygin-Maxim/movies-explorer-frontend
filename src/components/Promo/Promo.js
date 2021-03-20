import "./Promo.css";
import NavTab from "../NavTab/NavTab";

function Promo(props) {
  return (
    <section className='promo'>
      <h1 className='promo__text'>
        Учебный проект студента факультет Веб-разработки
      </h1>
      <div className='promo__container'>
        <NavTab />
      </div>
    </section>
  );
}

export default Promo;

import "./AboutMe.css";
import Portfolio from "../Portfolio/Portfolio";
import avatar from "../../images/avatar.jpg";

function AboutMe(props) {
  return (
    <section className='aboutMe' id='aboutMe'>
      <h2 className='aboutMe__header'>Студент</h2>
      <div className='aboutMe__container'>
        <div className='aboutMe__leftColumn'>
          <div className='aboutMe__topCell'>
            <h3 className='aboutMe__title'>Максим</h3>
            <p className='aboutMe__subtitle'>Фронтенд-разработчик, 29 лет</p>
            <p className='aboutMe__text'>
              Я родился и живу в Москве, закончил факультет экономики РГТЭУ.
              Увлекаюсь парусным спортом и сноубордом. С 2012 года занимаюсь
              разработкой на языке 1С. С 2016 года работаю в Яндексе
              программистом 1С. Со временем понял что необходимо развивать
              другие навыки и начал самостоятельно изучать JavaScript и верстку.
              В скором времени поступил на курс веб-разработки Яндекс.Практикума
              и уже применяю полученыне знания в своей работе.
            </p>
          </div>
          <div className='aboutMe__bottomCell'>
            <ul className='aboutMe__socialList'>
              <li className='aboutMe__social-item'>
                <a
                  className='aboutMe__social-link'
                  href='https://www.facebook.com/maks.chakrygin/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Facebook
                </a>
              </li>
              <li className='aboutMe__social-item'>
                <a
                  className='aboutMe__social-link'
                  href='https://github.com/Chakrygin-Maxim'
                  target='_blank'
                  rel='noreferrer'
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='aboutMe__rightColumn'>
          <img
            src={avatar}
            alt='Аватарка Максима'
            className='aboutMe__avatar'
          ></img>
        </div>
      </div>
      <Portfolio />
    </section>
  );
}

export default AboutMe;

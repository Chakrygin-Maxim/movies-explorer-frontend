import "./Footer.css";

function Footer(props) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      <p className='footer__text'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className='footer__underline' />
      <div className='footer__container'>
        &copy; {currentYear}
        <ul className='footer__socialList'>
          <li className='footer__social-item'>
            <a
              className='footer__social-link'
              href='https://praktikum.yandex.ru/'
              target='_blank'
              rel='noreferrer'
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className='footer__social-item'>
            <a
              className='footer__social-link'
              href='https://github.com/Chakrygin-Maxim'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
          </li>
          <li className='footer__social-item'>
            <a
              className='footer__social-link'
              href='https://www.facebook.com/maks.chakrygin/'
              target='_blank'
              rel='noreferrer'
            >
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

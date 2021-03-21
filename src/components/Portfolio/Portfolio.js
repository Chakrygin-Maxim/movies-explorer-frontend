import "./Portfolio.css";

function Portfolio(props) {
  return (
    <div className='portfolio'>
      <h3 className='portfolio__title'>Портфолио</h3>
      <ul className='portfolio__list'>
        <li className='portfolio__list-item'>
          <a
            className='portfolio__list-link'
            href='https://github.com/Chakrygin-Maxim/how-to-learn'
            target='_blank'
            rel='noreferrer'
          >
            Статичный сайт
          </a>
          ↗
        </li>
        <li className='portfolio__list-item'>
          <a
            className='portfolio__list-link'
            href='https://github.com/Chakrygin-Maxim/russian-travel'
            target='_blank'
            rel='noreferrer'
          >
            Адаптивный сайт
          </a>
          ↗
        </li>
        <li className='portfolio__list-item'>
          <a
            className='portfolio__list-link'
            href='https://github.com/Chakrygin-Maxim/mesto-react'
            target='_blank'
            rel='noreferrer'
          >
            Одностраничное приложение
          </a>
          ↗
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;

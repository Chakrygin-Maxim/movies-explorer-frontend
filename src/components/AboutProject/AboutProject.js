import "../AboutProject/AboutProject.css";

function AboutProject(props) {
  return (
    <section className='aboutProject'>
      <h2 className='aboutProject__header'>О проекте</h2>
      <div className='aboutProject__container'>
        <h3 className='aboutProject__subheader'>
          Дипломный проект включал 5 этапов
        </h3>
        <h3 className='aboutProject__subheader'>На выполнение ушло 5 недель</h3>
        <p className='aboutProject__text'>
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>
        <p className='aboutProject__text'>
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </p>
      </div>
      <div className='aboutProject__progressbar'>
        <div className='aboutProject__backend'> 1 неделя</div>
        <div className='aboutProject__frontend'>4 недели</div>
        <p className='aboutProject__progressbar-text'>Back-end</p>
        <p className='aboutProject__progressbar-text'>Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;

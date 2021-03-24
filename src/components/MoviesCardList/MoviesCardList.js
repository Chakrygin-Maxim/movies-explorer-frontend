import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { muvies } from "../../utils/muvies";

function MoviesCardList(props) {
  return (
    <div className='moviesCardList'>
      <section className='moviesCardList-list'>
        {muvies.map((item) => (
          <MoviesCard key={item._id} {...item} />
        ))}
      </section>
      <div className='moviesCardList__footer'>
        <button className='moviesCardList__more'>Ещё</button>
      </div>
    </div>
  );
}

export default MoviesCardList;

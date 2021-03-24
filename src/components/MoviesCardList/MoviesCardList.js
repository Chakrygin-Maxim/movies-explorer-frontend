import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import pic_1 from "../../images/pic-1.jpg";
import pic_2 from "../../images/pic-2.jpg";
import pic_3 from "../../images/pic-3.jpg";
import pic_4 from "../../images/pic-4.jpg";
import pic_5 from "../../images/pic-5.jpg";
import pic_6 from "../../images/pic-6.jpg";
import pic_7 from "../../images/pic-7.jpg";
import pic_8 from "../../images/pic-8.jpg";
import pic_9 from "../../images/pic-9.jpg";
import pic_10 from "../../images/pic-10.png";
import pic_11 from "../../images/pic-11.jpg";
import pic_12 from "../../images/pic-12.jpg";
import pic_13 from "../../images/pic-13.jpg";
import pic_14 from "../../images/pic-14.jpg";
import pic_15 from "../../images/pic-15.jpg";
import pic_16 from "../../images/pic-16.jpg";

function MoviesCardList(props) {
  return (
    <section className='moviesCardList'>
      <MoviesCard
        photo={pic_1}
        name={"33 слова о дизайне"}
        direction={"1ч 42м"}
      />
      <MoviesCard
        photo={pic_2}
        name={"Киноальманах «100 лет дизайна»"}
        direction={"1ч 42м"}
      />
      <MoviesCard
        photo={pic_3}
        name={"В погоне за Бенкси"}
        direction={"1ч 42м"}
      />
      <MoviesCard
        photo={pic_4}
        name={"Баския: Взрыв реальности"}
        direction={"1ч 42м"}
      />
      <MoviesCard photo={pic_5} name={"Бег это свобода"} direction={"1ч 42м"} />
      <MoviesCard photo={pic_6} name={"Книготорговцы"} direction={"1ч 42м"} />
      <MoviesCard
        photo={pic_7}
        name={"Когда я думаю о Германии ночью"}
        direction={"1ч 42м"}
      />
      <MoviesCard
        photo={pic_8}
        name={"Gimme Danger: История Игги и The Stooges"}
        direction={"1ч 42м"}
      />
      <MoviesCard
        photo={pic_9}
        name={"Дженис: Маленькая девочка грустит"}
        direction={"1ч 42м"}
      />
      <MoviesCard
        photo={pic_10}
        name={"Соберись перед прыжком"}
        direction={"1ч 42м"}
      />
      <MoviesCard
        photo={pic_11}
        name={"Пи Джей Харви: A dog called money"}
        direction={"1ч 42м"}
      />
      <MoviesCard
        photo={pic_12}
        name={"По волнам: Искусство звука в кино"}
        direction={"1ч 42м"}
      />
      <MoviesCard photo={pic_13} name={"Рудбой"} direction={"1ч 42м"} />
      <MoviesCard photo={pic_14} name={"Скейт — кухня"} direction={"1ч 42м"} />
      <MoviesCard photo={pic_15} name={"Война искусств"} direction={"1ч 42м"} />
      <MoviesCard photo={pic_16} name={"Зона"} direction={"1ч 42м"} />
    </section>
  );
}

export default MoviesCardList;

import "./NotFound.css";
import { useHistory } from "react-router-dom";

function NotFound(props) {
  const history = useHistory();
  return (
    <div className='notFound'>
      <span className='notFound__title'>404</span>
      <p className='notFound__subtitle'>Страница не найдена</p>
      <span onClick={history.goBack} className='notFound__link'>
        Назад
      </span>
    </div>
  );
}

export default NotFound;

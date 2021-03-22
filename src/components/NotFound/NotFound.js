import "./NotFound.css";
import { Link, useHistory } from "react-router-dom";

function NotFound(props) {
  const history = useHistory();
  return (
    <div className='notFound'>
      <span className='notFound__title'>404</span>
      <p className='notFound__subtitle'>Страница не найдена</p>
      <Link onClick={history.goBack} className='notFound__link'>
        Назад
      </Link>
    </div>
  );
}

export default NotFound;

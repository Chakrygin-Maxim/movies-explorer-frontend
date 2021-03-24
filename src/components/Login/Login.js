import "./Login.css";
import logo from "../../images/header-logo.svg";
import { Link } from "react-router-dom";
import UserForm from "../UserForm/UserForm";

function Login(props) {
  return (
    <div className='login'>
      <Link to={"/"}>
        <img src={logo} alt='Основное лого сайта' className='userForm__logo' />
      </Link>
      <UserForm
        name={"signin"}
        title={"Рады видеть!"}
        buttonText={"Войти"}
        footerText={"Еще не зарегистрированы?"}
        footerSubText={"Регистрация"}
        linkRoute={"/signup"}
      >
        <fieldset className='login__fieldset'>
          <span className='login__placeholder'>E-mail</span>
          <input
            name='email'
            className='login__input'
            type='email'
            minLength='2'
            maxLength='40'
            required
          />
          <span className='login__input-error' id='email-input-error'></span>

          <span className='login__placeholder'>Пароль</span>
          <input
            name='password'
            className='login__input'
            type='password'
            minLength='8'
            maxLength='40'
            required
          />
          <span className='login__input-error' id='email-input-password'></span>
        </fieldset>
      </UserForm>
    </div>
  );
}

export default Login;

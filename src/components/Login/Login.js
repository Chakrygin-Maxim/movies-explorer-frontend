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
        <fieldset className='userForm__fieldset login__fieldset'>
          <span className='userForm__placeholder'>E-mail</span>
          <input
            name='email'
            className='userForm__input'
            type='email'
            minLength='2'
            maxLength='40'
            required
          />
          <span className='userForm__input-error' id='email-input-error'></span>
          <span className='userForm__placeholder'>Пароль</span>
          <input
            name='password'
            className='userForm__input'
            type='password'
            minLength='8'
            maxLength='40'
            required
          />
          <span
            className='userForm__input-error'
            id='password-input-error'
          ></span>
        </fieldset>
      </UserForm>
    </div>
  );
}

export default Login;

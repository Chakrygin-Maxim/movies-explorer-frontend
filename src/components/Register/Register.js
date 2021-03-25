import "./Register.css";
import { Link } from "react-router-dom";
import logo from "../../images/header-logo.svg";
import UserForm from "../UserForm/UserForm";

function Register(props) {
  return (
    <div className='register'>
      <Link to={"/"}>
        <img src={logo} alt='Основное лого сайта' className='userForm__logo' />
      </Link>
      <UserForm
        name={"signup"}
        title={"Добро пожаловать!"}
        buttonText={"Зарегистрироваться"}
        footerText={"Уже зарегистрированы?"}
        footerSubText={"Войти"}
        linkRoute={"/signin"}
      >
        <fieldset className='userForm__fieldset register__fieldset'>
          <span className='register__placeholder'>Имя</span>
          <input
            name='name'
            type='text'
            className='userForm__input'
            id='name-input'
            minLength='2'
            maxLength='40'
            required
          />
          <span className='userForm__input-error' id='name-input-error'></span>

          <span className='register__placeholder'>E-mail</span>
          <input
            name='email'
            className='userForm__input'
            type='email'
            minLength='2'
            maxLength='40'
            required
          />
          <span className='userForm__input-error' id='email-input-error'></span>

          <span className='register__placeholder'>Пароль</span>
          <input
            name='password'
            className='userForm__input'
            type='password'
            minLength='8'
            maxLength='40'
            required
          />
          <span className='userForm__input-error' id='email-input-password'>
            Что-то пошло не так...
          </span>
        </fieldset>
      </UserForm>
    </div>
  );
}

export default Register;

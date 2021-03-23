import "./Register.css";
import logo from "../../images/header-logo.svg";
import UserForm from "../UserForm/UserForm";

function Register(props) {
  return (
    <div className='register'>
      <img src={logo} alt='Основное лого сайта' className='userForm__logo' />
      <UserForm
        name={"signup"}
        title={"Добро пожаловать!"}
        buttonText={"Зарегистрироваться"}
        footerText={"Уже зарегистрированы?"}
        footerSubText={"Войти"}
        linkRoute={"/signin"}
      >
        <fieldset className='register__fieldset'>
          <span className='register__placeholder'>Имя</span>
          <input
            name='name'
            type='text'
            className='register__input register__input_field_name'
            id='name-input'
            minLength='2'
            maxLength='40'
            required
          />
          <span className='register__input-error' id='name-input-error'></span>

          <span className='register__placeholder'>E-mail</span>
          <input
            name='email'
            className='register__input'
            type='email'
            minLength='2'
            maxLength='40'
            required
          />
          <span className='register__input-error' id='email-input-error'></span>

          <span className='register__placeholder'>Пароль</span>
          <input
            name='password'
            className='register__input'
            type='password'
            minLength='8'
            maxLength='40'
            required
          />
          <span
            className='register__input-error'
            id='email-input-password'
          ></span>
        </fieldset>
      </UserForm>
    </div>
  );
}

export default Register;

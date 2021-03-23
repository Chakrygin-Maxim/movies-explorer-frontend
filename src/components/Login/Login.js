import "./Login.css";
import UserForm from "../UserForm/UserForm";

function Login(props) {
  return (
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
  );
}

export default Login;

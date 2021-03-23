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
    ></UserForm>
  );
}

export default Login;

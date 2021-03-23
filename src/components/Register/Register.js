import "./Register.css";
import UserForm from "../UserForm/UserForm";

function Register(props) {
  return (
    <UserForm
      name={"signup"}
      title={"Добро пожаловать!"}
      buttonText={"Зарегистрироваться"}
      footerText={"Уже зарегистрированы?"}
      footerSubText={"Войти"}
    ></UserForm>
  );
}

export default Register;

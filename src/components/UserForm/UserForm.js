import "./UserForm.css";
import logo from "../../images/header-logo.svg";

function UserForm(props) {
  return (
    <section className='userForm'>
      <img
        src={logo}
        alt='Основное лого сайта'
        className='userForm__logo'
      ></img>
      <form
        className='userForm__form'
        action={`popup-${props.name}-submit`}
        name={props.name}
        noValidate
      >
        <h2 className={`userForm__title userForm__title_type_${props.name}`}>
          {props.title}
        </h2>
        {props.children}
        <footer class='userForm__footer'>
          <button
            type='submit'
            className={`popup__submit popup__submit_type_${props.name}`}
          >
            {props.buttonText}
          </button>
          <div className={"userForm__foonter-container"}>
            <p className='userForm__fotter-text'>
              {props.footerText}
              <span
                className={`userForm__footer-link userForm__footer-link_type_${props.name}`}
              >
                {props.footerSubText}
              </span>
            </p>
          </div>
        </footer>
      </form>
    </section>
  );
}

export default UserForm;

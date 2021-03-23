import "./UserForm.css";
import { Link } from "react-router-dom";

function UserForm(props) {
  return (
    <section className='userForm'>
      <form
        className='userForm__form'
        action={`userForm-${props.name}-submit`}
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
            className={`userForm__submit userForm__submit_type_${props.name}`}
          >
            {props.buttonText}
          </button>
          <div className={"userForm__foonter-container"}>
            <p className='userForm__fotter-text'>
              {props.footerText}
              <Link
                to={props.linkRoute}
                className={`userForm__footer-link userForm__footer-link_type_${props.name}`}
              >
                {props.footerSubText}
              </Link>
            </p>
          </div>
        </footer>
      </form>
    </section>
  );
}

export default UserForm;

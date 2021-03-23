import "./Profile.css";
import UserForm from "../UserForm/UserForm";

function Profile(props) {
  return (
    <div className='profile'>
      <UserForm
        name={"profile"}
        title={"Привет, Максим!"}
        buttonText={"Редактировать"}
        footerSubText={"Выйти из аккаунта"}
        linkRoute={"/signup"}
      >
        <fieldset className='profile__fieldset'>
          <span className='profile__placeholder'>Имя</span>
          <input
            name='name'
            type='text'
            className='profile__input profile__input_field_name'
            id='name-input'
            minLength='2'
            maxLength='40'
            required
          />
          <span className='profile__input-error' id='name-input-error'></span>

          <span className='profile__placeholder'>E-mail</span>
          <input
            name='email'
            className='profile__input'
            type='email'
            minLength='2'
            maxLength='40'
            required
          />
          <span className='profile__input-error' id='email-input-error'></span>
        </fieldset>
      </UserForm>
    </div>
  );
}

export default Profile;

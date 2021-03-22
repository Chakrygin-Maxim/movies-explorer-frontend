import "./App.css";
import { Route, Switch } from "react-router-dom";
import { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import NotFound from "../NotFound/NotFound";
// import HeaderLandingButtons from "../HeaderLandingButtons/HeaderLandingButtons";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Header loggedIn={loggedIn} />
          <Main />
          <Footer />
        </Route>
        <Route path='/signup'>
          <Header loggedIn={loggedIn} />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
      {/* <Navigation />
      <Switch>
        <Route path='/'> */}

      {/* </Route>
        <Route path='/movies'>
          <Movies />
        </Route>
        <Route path='/saved-movies'>
          <SavedMovies />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
        <Route path='/signup'>
          <Register />
        </Route>
        <Route path='/signin'>
          <Login />
        </Route>
      </Switch>*/}
    </>
  );
}

export default App;

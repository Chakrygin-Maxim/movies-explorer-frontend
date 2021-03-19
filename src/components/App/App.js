import { Route, Switch } from "react-router-dom";
import Main from "../Main";
import Movies from "../Movies";
import SavedMovies from "../SavedMovies";
import Profile from "../Profile";
import Register from "../Register";
import Login from "../Login";
import Header from "../Header";
import Navigation from "../Navigation";
import Footer from "../Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <Switch>
        <Route path='/'>
          <Main />
        </Route>
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
      </Switch>
      <Footer />
    </>
  );
}

export default App;

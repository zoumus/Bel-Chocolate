import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import ProfileButton from './components/Navigation/ProfileButton';

function App() {
  return (
    <>
      <Navigation/>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path='/account'>
          <ProfileButton />
        </Route>
        <Route path="/login">
          <LoginFormPage />
        </Route>
        <Route path="/signup">
          <SignupFormPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;

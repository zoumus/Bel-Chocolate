import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import ProfileButton from './components/Navigation/ProfileButton';
import ProductIndex from "./components/ProductPage/ProductIndex";
import ProductShow from "./components/ProductPage/ProductShow";

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
        <Route exact path="/products" component={ProductIndex}/>
        <Route exact path="/products/:productId" component={ProductShow}/>
      </Switch>
    </>
  );
}

export default App;

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import ProfileButton from './components/Navigation/ProfileButton';
import ProductIndex from "./components/ProductPage/ProductIndex";
import ProductShow from "./components/ProductPage/ProductShow";
import AboutPage from './components/AboutPage/AboutPage.js';
import CategoryIndex from './components/CategoryPage/CategoryIndex.js'
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Navigation/>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path='/account'>
          <ProfileButton />
        </Route>
        <Route exact path="/login">
          <LoginFormPage />
        </Route>
        <Route exact path="/signup">
          <SignupFormPage />
        </Route>
        <Route exact path="/products">
          <ProductIndex/>
        </Route>
        <Route exact path="/products/:productId">
          <ProductShow/>
        </Route>
        <Route exact path="/products/category/:categoryId">
          <CategoryIndex/>
        </Route> 
        <Route exact path="/about">
          <AboutPage/>
        </Route>
      </Switch>
    </>
  );
}

export default App;

{/* <Route exact path="/products/category/:categoryId">
    <CategoryIndex/>
</Route> */}
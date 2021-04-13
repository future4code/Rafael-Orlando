import React, {useState , useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import AdminHomePage from './pages/AdminHomePage';
import ApplicationFormPage from './pages/ApplicationFormPage';
import CreateTripPage from './pages/CreateTripPage';
import HomePage from './pages/HomePage';
import ListTripPage from './pages/ListTripPage';
import LoginPage from './pages/LoginPage';
import TripDetailsPage from './pages/TripDetailsPage';
import ErrorPage from './pages/ErrorPage';
import {useHistory} from 'react-router-dom';


 const App = () => {
   return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/AdminHomePage">
            <AdminHomePage />
          </Route>

          <Route exact path="/LoginPage">
            <LoginPage/>
          </Route>

          <Route exact path="/CreateTripPage">
            <CreateTripPage />
          </Route>

          <Route exact path="/ApplicationFormPage">
            <ApplicationFormPage />
          </Route>

          <Route exact path="/ListTripPage">
            <ListTripPage />
          </Route>

          <Route exact path="/TripDetailsPage">
            <TripDetailsPage />
          </Route>

          <Route>
            <ErrorPage  />
          </Route>

        </Switch>
      </BrowserRouter>
      
   )
 }

 export default App;
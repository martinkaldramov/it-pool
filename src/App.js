// @flow
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
// import logo from './logo.svg';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import ApplicationBar from './components/app_bar';
import SearchBar from './components/search_bar';
import SearchResults from './components/search_results/search_results';
import HomeLoggedIn from './components/home_logged_in/home_logged_in';

const App = () => (
  <MuiThemeProvider>
    <ApplicationBar />
    <Switch>
      <Route exact path="/" component={SearchBar} />
      <Route exact path="/search-results" component={SearchResults} />
      <Route exact path="/home-logged-in" component={HomeLoggedIn} />
    </Switch>
  </MuiThemeProvider>
);

export default App;

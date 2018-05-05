// @flow
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
// import logo from './logo.svg';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import SideMenu from './components/reusable/side_menu';
import SearchBar from './components/search_bar';
import SearchResults from './components/search_results/search_results';
import HomeLoggedIn from './components/home_logged_in/home_logged_in';
import JobView from './components/reusable/job_view';

const App = () => (
  <MuiThemeProvider>
    <SideMenu />
    <Switch>
      <Route exact path="/" component={SearchBar} />
      <Route exact path="/search-results" component={SearchResults} />
      <Route exact path="/home-logged-in" component={HomeLoggedIn} />
      <Route path="/jobs/:id" component={JobView} />
    </Switch>
  </MuiThemeProvider>
);

export default App;

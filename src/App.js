// @flow
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import React from 'react';
// import logo from './logo.svg';
import './App.css';

import AppBarExampleIconButton from './containers/app_bar';
import SearchBar from './containers/search';

const App = () => (
  <MuiThemeProvider>
    <AppBarExampleIconButton />
    <SearchBar />
  </MuiThemeProvider>
);

export default App;

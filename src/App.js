// @flow
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import React from 'react';
// import logo from './logo.svg';
import './App.css';
import AppBarExampleIconButton from './containers/app_bar';

const App = () => (
  <MuiThemeProvider>
    <AppBarExampleIconButton />
  </MuiThemeProvider>
);

const add = (a, b) => a + b;

add(1, 2);

export default App;

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

export default App;

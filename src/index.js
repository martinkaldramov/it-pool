import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';

import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App';

injectTapEventPlugin();

ReactDOM.render(
  <Router>
    <Route path="/" component={App} />
  </Router>,
  // eslint-disable-next-line
  document.getElementById('root'),
);
registerServiceWorker();

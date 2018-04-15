import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

injectTapEventPlugin();

ReactDOM.render(
  // eslint-disable-line no-use-before-define
  <Router>
    <Route path="/" component={App} />
  </Router>,
  // eslint-disable-next-line
  document.getElementById('root'),
);
registerServiceWorker();

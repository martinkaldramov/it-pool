// @flow

import * as React from 'react';
import FlatButton from 'material-ui/FlatButton';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();

const handleClick = () => history.push('/search-results');

const SearchBar = (): React.Node => (
  <React.Fragment>
    <input type="text" className="search-bar" />
    <FlatButton label="Search" onClick={handleClick} />
  </React.Fragment>
);

export default SearchBar;

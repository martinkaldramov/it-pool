import React from 'react';

import FlatButton from 'material-ui/FlatButton';

const SearchBar = () => (
  <React.Fragment>
    <input type="text" className="search-bar" />
    <FlatButton label="Search" />
  </React.Fragment>
);

export default SearchBar;

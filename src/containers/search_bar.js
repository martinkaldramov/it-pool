// @flow

import * as React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { withRouter } from 'react-router-dom';

type Props = {
  history: {},
};

const SearchBar = ({ history }: Props): React.Node => (
  <React.Fragment>
    <input type="text" className="search-bar" />
    <FlatButton label="Search" onClick={() => history.push('/search-results')} />
  </React.Fragment>
);

export default withRouter(SearchBar);

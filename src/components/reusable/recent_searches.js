// @flow
import * as React from 'react';
import MenuItem from 'material-ui/MenuItem';
import MockProfile from '../../mock_data/mock_profile';

const searchTerms = MockProfile.recentSearches.map(term => <li>{term}</li>);

const RecentSearches = () => (
  <React.Fragment>
    <MenuItem>RECENT SEARCHES</MenuItem>
    <ul>{searchTerms}</ul>
  </React.Fragment>
);

export default RecentSearches;

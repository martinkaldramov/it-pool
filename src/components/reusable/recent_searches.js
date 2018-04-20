// @flow
import * as React from 'react';
import MenuItem from 'material-ui/MenuItem';

type Props = {
  recentSearches: string[],
};

const renderListItems = item => <li>{item}</li>;

const RecentSearches = (props: Props) => (
  <React.Fragment>
    <MenuItem>RECENT SEARCHES</MenuItem>
    <ul>{props.recentSearches.map(renderListItems)}</ul>
  </React.Fragment>
);

export default RecentSearches;

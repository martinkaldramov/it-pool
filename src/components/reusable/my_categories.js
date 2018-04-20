// @flow
import * as React from 'react';
import MenuItem from 'material-ui/MenuItem';

type Props = {
  categories: string[],
};

const renderListItems = item => <li>{item}</li>;

const MyCategories = (props: Props) => (
  <React.Fragment>
    <MenuItem>MY CATEGORIES</MenuItem>
    <ul>{props.categories.map(renderListItems)}</ul>
  </React.Fragment>
);

export default MyCategories;

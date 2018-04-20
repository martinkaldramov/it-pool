// @flow
import * as React from 'react';
import { Component } from 'react';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import ActionHome from 'material-ui/svg-icons/action/home';

import MockProfile from '../../mock_data/mock_profile';
import StaticMenuItems from '../reusable/static_menu_items';
import RecentSearches from './recent_searches';
import MyCategories from './my_categories';
import MyProfile from './my_profile';

class SideMenu extends Component {
  constructor(props: any) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <Drawer
        docked={false}
        open={this.state.open}
        onRequestChange={open => this.setState({ open })}
      >
        <MenuItem>
          <ActionHome /> Home
        </MenuItem>
        <Divider />
        <StaticMenuItems />
        <Divider />
        <RecentSearches recentSearches={MockProfile.recentSearches} />
        <Divider />
        <MyCategories categories={MockProfile.categories} />
        <Divider />
        <MyProfile />
      </Drawer>
    );
  }
}

const SideMenu2 = (props: Props): React.Node => (
  <Drawer docked={props.docked}>
    <MenuItem>
      <ActionHome /> Home
    </MenuItem>
    <Divider />
    <StaticMenuItems />
    <Divider />
    <RecentSearches recentSearches={MockProfile.recentSearches} />
    <Divider />
    <MyCategories categories={MockProfile.categories} />
    <Divider />
    <MyProfile />
  </Drawer>
);

export default SideMenu;

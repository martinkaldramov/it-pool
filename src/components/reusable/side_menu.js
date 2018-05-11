// @flow
import * as React from 'react';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import ActionHome from 'material-ui/svg-icons/action/home';

import AppBar from '../app_bar';

import MockProfile from '../../mock_data/mock_profile';
import StaticMenuItems from './static_menu_items';
import RecentSearches from './recent_searches';
import MyCategories from './my_categories';
import MyProfile from './my_profile';

class SideMenu extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <React.Fragment>
        <AppBar openMenu={this.handleToggle} />
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
      </React.Fragment>
    );
  }
}

export default SideMenu;

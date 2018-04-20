// @flow
import * as React from 'react';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import ActionHome from 'material-ui/svg-icons/action/home';

import MockProfile from '../../mock_data/mock_profile';
import StaticMenuItems from '../reusable/static_menu_items';
import RecentSearches from './recent_searches';
import MyCategories from './my_categories';

const SideMenu = (): React.Node => (
  <Drawer docked>
    <MenuItem>
      <ActionHome />Home
    </MenuItem>
    <Divider />
    <StaticMenuItems />
    <Divider />
    <RecentSearches recentSearches={MockProfile.recentSearches} />
    <Divider />
    <MyCategories categories={MockProfile.categories} />
    <Divider />
  </Drawer>
);

export default SideMenu;

// @flow
import * as React from 'react';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import ActionHome from 'material-ui/svg-icons/action/home';

import StaticMenuItems from '../reusable/static_menu_items';

const SideMenu = (): React.Node => (
  <Drawer docked>
    <MenuItem>
      <ActionHome />Home
    </MenuItem>
    <Divider />
    <StaticMenuItems />
  </Drawer>
);

export default SideMenu;

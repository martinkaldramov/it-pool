// @flow
import * as React from 'react';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

const SideMenu = (): React.Node => (
  <Drawer docked>
    <MenuItem>Home</MenuItem>
    <Divider />
    <MenuItem>My Applications</MenuItem>
    <MenuItem>My Proposals</MenuItem>
  </Drawer>
);

export default SideMenu;

// @flow
import * as React from 'react';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import ActionHome from 'material-ui/svg-icons/action/home';
import NotificationEventNote from 'material-ui/svg-icons/notification/event-note';
import ActionEvent from 'material-ui/svg-icons/action/event';

const SideMenu = (): React.Node => (
  <Drawer docked>
    <MenuItem>
      <ActionHome />Home
    </MenuItem>
    <Divider />
    <MenuItem>
      <NotificationEventNote />My Applications
    </MenuItem>
    <MenuItem>
      <ActionEvent />My Proposals
    </MenuItem>
  </Drawer>
);

export default SideMenu;

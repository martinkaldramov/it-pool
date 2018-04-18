// @flow
import * as React from 'react';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import ActionHome from 'material-ui/svg-icons/action/home';
import NotificationEventNote from 'material-ui/svg-icons/notification/event-note';
import ActionEvent from 'material-ui/svg-icons/action/event';
import ContentSave from 'material-ui/svg-icons/content/save';
import ActionSearch from 'material-ui/svg-icons/action/search';
import SocialWhatshot from 'material-ui/svg-icons/social/whatshot';
import ActionExplore from 'material-ui/svg-icons/action/explore';

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
    <MenuItem>
      <ContentSave />Saved Jobs
    </MenuItem>
    <MenuItem>
      <ActionSearch />Saved Searches
    </MenuItem>
    <MenuItem>
      <SocialWhatshot />Popular Jobs
    </MenuItem>
    <MenuItem>
      <ActionExplore />Browse Categories
    </MenuItem>
  </Drawer>
);

export default SideMenu;

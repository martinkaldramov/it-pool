import * as React from 'react';
import MenuItem from 'material-ui/MenuItem';

import NotificationEventNote from 'material-ui/svg-icons/notification/event-note';
import ActionEvent from 'material-ui/svg-icons/action/event';
import ContentSave from 'material-ui/svg-icons/content/save';
import ActionSearch from 'material-ui/svg-icons/action/search';
import SocialWhatshot from 'material-ui/svg-icons/social/whatshot';
import ActionExplore from 'material-ui/svg-icons/action/explore';

const StaticMenuItems = () => (
  <React.Fragment>
    <MenuItem>FIND JOBS</MenuItem>
    <MenuItem>
      <NotificationEventNote /> My Applications
    </MenuItem>
    <MenuItem>
      <ActionEvent /> My Proposals
    </MenuItem>
    <MenuItem>
      <ContentSave /> Saved Jobs
    </MenuItem>
    <MenuItem>
      <ActionSearch /> Saved Searches
    </MenuItem>
    <MenuItem>
      <SocialWhatshot /> Popular Jobs
    </MenuItem>
    <MenuItem>
      <ActionExplore /> Browse Categories
    </MenuItem>
  </React.Fragment>
);

export default StaticMenuItems;

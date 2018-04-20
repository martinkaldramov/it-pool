// @flow
import * as React from 'react';
import MenuItem from 'material-ui/MenuItem';
import Toggle from 'material-ui/Toggle';

import ActionSettings from 'material-ui/svg-icons/action/settings';
import ImageRemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import ActionExitToApp from 'material-ui/svg-icons/action/exit-to-app';

const MyProfile = () => (
  <React.Fragment>
    <MenuItem>MY PROFILE</MenuItem>
    <MenuItem>
      <Toggle defaultToggled /> Receive Offers
    </MenuItem>
    <MenuItem>
      <ActionSettings /> Settings
    </MenuItem>
    <MenuItem>
      <ImageRemoveRedEye /> View Profile
    </MenuItem>
    <MenuItem>
      <ActionExitToApp /> Sign Out
    </MenuItem>
  </React.Fragment>
);

export default MyProfile;

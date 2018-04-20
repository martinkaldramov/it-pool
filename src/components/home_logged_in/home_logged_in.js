// @flow
import * as React from 'react';
import SideMenu from '../reusable/side_menu';
import JobsList from '../reusable/jobs_list';

const HomeLoggedIn = (): React.Node => (
  <React.Fragment>
    <SideMenu />
    <JobsList />
  </React.Fragment>
);

export default HomeLoggedIn;

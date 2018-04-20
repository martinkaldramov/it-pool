import * as React from 'react';

import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { withRouter } from 'react-router-dom';

const styles = {
  title: {
    cursor: 'pointer',
  },
};

type Props = {
  history: any,
  openMenu: void,
};

/**
 * This example uses an [IconButton](/#/components/icon-button) on the left, has a clickable `title`
 * through the `onClick` property, and a [FlatButton](/#/components/flat-button) on the right.
 */
const ApplicationBar = ({ history, openMenu }: Props): React.Node => (
  <AppBar
    title={<span style={styles.title}>IT Pool</span>}
    onLeftIconButtonClick={openMenu}
    iconElementRight={
      <React.Fragment>
        <FlatButton
          className="sign-in"
          label="Sign In"
          onClick={() => history.push('/home-logged-in')}
        />
        <RaisedButton className="sign-up" label="Sign Up" />
        <RaisedButton className="post-a-job" label="Post a Job" />
      </React.Fragment>
    }
  />
);

export default withRouter(ApplicationBar);

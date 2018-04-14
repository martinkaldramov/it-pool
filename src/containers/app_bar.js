import React from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  title: {
    cursor: 'pointer',
  },
};

/**
 * This example uses an [IconButton](/#/components/icon-button) on the left, has a clickable `title`
 * through the `onClick` property, and a [FlatButton](/#/components/flat-button) on the right.
 */
const ApplicationBar = () => (
  <AppBar
    showMenuIconButton={false}
    title={<span style={styles.title}>IT Pool</span>}
    iconElementRight={
      <React.Fragment>
        <FlatButton className="sign-in" label="Log In" />
        <RaisedButton className="sign-up" label="Sign Up" />
        <RaisedButton className="post-a-job" label="Post a Job" />
      </React.Fragment>
    }
  />
);

export default ApplicationBar;

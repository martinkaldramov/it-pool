// @flow
import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ContentFlag from 'material-ui/svg-icons/content/flag';

type Props = {
  apply: void,
  save: void,
};

const Actions = ({ apply, save }: Props) => (
  <React.Fragment>
    <RaisedButton label="APPLY" primary className="job-apply" onClick={apply} />
    <RaisedButton label="SAVE JOB" primary className="job-save" onClick={save} />
    <ContentFlag /> Flag as inappropriate
  </React.Fragment>
);

export default Actions;

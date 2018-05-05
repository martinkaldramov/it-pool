import * as React from 'react';
import mockJobs from '../../mock_data/mock_jobs';

type Props = {
  match: any,
};

const JobView = (props: Props) => (
  <h3>Job with ID: {props.match.params.id} successfully renderd</h3>
);

export default JobView;

import * as React from 'react';
import mockJobs from '../../mock_data/mock_jobs';

type Props = {
  match: any,
};

const JobView = ({ match }: Props) => <h3>Job with ID: {match.params.id} successfully renderd</h3>;

export default JobView;

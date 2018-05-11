// @flow
import * as React from 'react';
import jobs from '../../../mock_data/mock_jobs';

const SimilarJobs = () => (
  <React.Fragment>
    <h4>SIMILAR JOBS</h4>
    <ul>{jobs.map(item => <li>{item.title}</li>)}</ul>
  </React.Fragment>
);

export default SimilarJobs;

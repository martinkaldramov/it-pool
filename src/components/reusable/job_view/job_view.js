import * as React from 'react';
import mockJobs from '../../../mock_data/mock_jobs';

type job = {
  id: number,
  title: string,
  views: number,
  company: string,
  date: ?number,
  city: string,
  type: string,
  experience: string,
  category: string,
  description: string,
  skills: string[],
};

type Props = {
  match: any,
};

const JobView = ({ match }: Props) => {
  const displayedJob: job = mockJobs[match.params.id - 1];

  return (
    <React.Fragment>
      <h2 className="job-header">{displayedJob.title}</h2>
      <div className="job-sub-header">
        <p>{displayedJob.category}</p>
      </div>
    </React.Fragment>
  );
};

export default JobView;

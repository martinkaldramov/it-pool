import * as React from 'react';
import Header from './header';
import mockJobs from '../../../mock_data/mock_jobs';
import Actions from './actions';
import Skills from './skills';

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
  education: string,
  languages: ?(string[]),
};

type Props = {
  match: any,
};

const JobView = ({ match }: Props) => {
  const displayedJob: job = mockJobs[match.params.id - 1];

  const jobApply = () => console.log('Applied for a job');

  const jobSave = () => console.log('Saved a job');

  return (
    <React.Fragment>
      <h2 className="job-header">{displayedJob.title}</h2>
      <Header
        category={displayedJob.category}
        timeStamp="5hr ago"
        experience={displayedJob.experience}
        company={displayedJob.company}
        views={displayedJob.views}
        city={displayedJob.city}
        type={displayedJob.type}
      />
      <Actions apply={jobApply} save={jobSave} />
      <hr />
      <h4>DETAILS</h4>
      <div>
        <p>{displayedJob.description}</p>
      </div>
      <hr />
      <Skills skills={displayedJob.skills} />
      <hr />
      <h4>EDUCATION</h4>
      <p>{displayedJob.education}</p>
      <hr />
    </React.Fragment>
  );
};

export default JobView;

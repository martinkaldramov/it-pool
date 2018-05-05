import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
import JobView from '../../job_view/job_view';
import mockJobs from '../../../../mock_data/mock_jobs';

describe('JobView', () => {
  const job = mockJobs[0];
  const wrap = shallow(<MemoryRouter initialEntries={['/jobs/1']}>
    <JobView jobData={job} />
                       </MemoryRouter>);

  it('should render successfully', () => {
    expect(wrap).toMatchSnapshot();
  });
});

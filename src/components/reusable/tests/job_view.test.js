import React from 'react';
import { shallow } from 'enzyme';
import JobView from '../job_view';
import mockJobs from '../../../mock_data/mock_jobs';

describe('JobView', () => {
  const job = mockJobs[0];
  const wrap = shallow(<JobView jobData={job} />);

  it('should render successfully', () => {
    expect(wrap).toMatchSnapshot();
  });
});

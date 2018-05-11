import React from 'react';
import { shallow } from 'enzyme';
import SimilarJobs from '../../job_view/similar_jobs';

describe('SimilarJobs', () => {
  const wrapper = shallow(<SimilarJobs />);

  it('should render successfuly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

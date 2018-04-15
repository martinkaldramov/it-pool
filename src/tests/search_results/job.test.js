import React from 'react';
import { shallow } from 'enzyme';
import Job from '../../components/search_results/job';

describe('Job', () => {
  const wrap = shallow(<Job />);

  it('should render successfully', () => {
    expect(wrap).toMatchSnapshot();
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import JobsList from '../../components/search_results/jobs_list';

describe('JobsList', () => {
  const wrap = shallow(<JobsList />);

  it('should render successfully', () => {
    expect(wrap).toMatchSnapshot();
  });

  it('should have 3 children', () => {
    expect(wrap.children).toBe(3);
  });
});

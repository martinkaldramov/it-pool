import React from 'react';
import { shallow } from 'enzyme';
import JobsList from '../../components/reusable/jobs_list';

describe('JobsList', () => {
  const wrap = shallow(<JobsList />);

  it('should render successfully', () => {
    expect(wrap).toMatchSnapshot();
  });
});

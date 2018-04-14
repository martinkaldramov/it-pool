import React from 'react';
import { shallow } from 'enzyme';
import FilterBar from '../../containers/search_results/filter_bar';

describe('FilterBar', () => {
  const wrap = shallow(<FilterBar />);

  it('should render successfully', () => {
    expect(wrap).toMatchSnapshot();
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import StaticFilters from '../../components/search_results/static_filters';

describe('InputFilters', () => {
  const wrap = shallow(<StaticFilters />);

  it('should render successfully', () => {
    expect(wrap).toMatchSnapshot();
  });
});

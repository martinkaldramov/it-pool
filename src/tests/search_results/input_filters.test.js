import React from 'react';
import { shallow } from 'enzyme';
import InputFilters from '../../containers/search_results/input_filters';

describe('InputFilters', () => {
  const wrap = shallow(<InputFilters />);

  it('should render successfully', () => {
    expect(wrap).toMatchSnapshot;
  });
});

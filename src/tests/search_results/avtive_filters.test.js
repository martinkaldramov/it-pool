import React from 'react';
import { shallow } from 'enzyme';
import ActiveFiltes from '../../containers/search_results/active_filters';

describe('ActiveFilters', () => {
  const wrap = shallow(<ActiveFiltes />);

  it('should render successfully', () => {
    expect(wrap).toMatchSnapshot;
  });
});
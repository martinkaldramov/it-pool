import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from '../containers/search_bar';

describe('SearchBar', () => {
  const wrap = shallow(<SearchBar />);

  it('should render correctly', () => {
    expect(wrap).toMatchSnapshot();
  });
});

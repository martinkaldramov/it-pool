import React from 'react';
import { shallow } from 'enzyme';
import MyCategories from '../my_categories';

describe('MyCategories', () => {
  const wrap = shallow(<MyCategories />);

  it('should renderr successfully', () => {
    expect(wrap).toMatchSnapshot();
  });
});

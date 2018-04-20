import React from 'react';
import { shallow } from 'enzyme';
import MyCategories from '../my_categories';
import MockProfile from '../../../mock_data/mock_profile';

describe('MyCategories', () => {
  const wrap = shallow(<MyCategories categories={MockProfile.categories} />);

  it('should renderr successfully', () => {
    expect(wrap).toMatchSnapshot();
  });
});

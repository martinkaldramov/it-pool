import React from 'react';
import { shallow } from 'enzyme';
import MyProfile from '../my_profile';

describe('MyProfile', () => {
  const wrap = shallow(<MyProfile />);

  it('should render successfully', () => {
    expect(wrap).toMatchSnapshot();
  });
});

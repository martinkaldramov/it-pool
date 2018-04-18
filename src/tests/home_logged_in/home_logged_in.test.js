import React from 'react';
import { shallow } from 'enzyme';
import HomeLoggedIn from '../../components/home_logged_in/home_logged_in';

describe('HomeLoggedIn', () => {
  const wrap = shallow(<HomeLoggedIn />);

  it('should render successfully', () => {
    expect(wrap).toMatchSnapshot();
  });
});

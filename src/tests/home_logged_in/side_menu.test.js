import React from 'react';
import { shallow } from 'enzyme';
import SideMenu from '../../components/home_logged_in/side_menu';

describe('SideMenu', () => {
  const wrap = shallow(<SideMenu />);

  it('should render successfully', () => {
    expect(wrap).toMatchSnapshot();
  });
});

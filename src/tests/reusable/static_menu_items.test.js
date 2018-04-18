import React from 'react';
import { shallow } from 'enzyme';
import StaticMenuItems from '../../components/reusable/static_menu_items';

describe('StaticMenuItems', () => {
  const wrap = shallow(<StaticMenuItems />);

  it('should render successfully', () => {
    expect(wrap).toMatchSnapshot();
  });
});

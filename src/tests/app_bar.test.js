import React from 'react';
import { shallow } from 'enzyme';
import ApplicationBar from '../components/app_bar';

describe('ApplicationBar tests', () => {
  const wrap = shallow(<ApplicationBar />);

  it('should render successfully', () => {
    expect(wrap).toMatchSnapshot();
  });
});

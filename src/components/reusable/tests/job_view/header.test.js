import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../job_view/header';

describe('Header' () => {
  const wrap = shallow(<Header />);

  it('shoud render sccesfully', () => {
    expect(wrap).toMatchSnapshot();
  });
});
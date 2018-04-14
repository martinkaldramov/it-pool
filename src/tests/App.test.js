import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('App shoud render 2 components', () => {
  const wrap = shallow(<App />);
  expect(wrap).toMatchSnapshot();
});

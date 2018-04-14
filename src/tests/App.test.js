import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('App Component tests', () => {
  const wrap = shallow(<App />);

  it('Should render 2 child components', () => {
    expect(wrap.children().length).toBe(2);
  });

  it('should render successfully', () => {
    expect(wrap).toMatchSnapshot();
  });
});

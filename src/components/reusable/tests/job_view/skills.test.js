import React from 'react';
import { shallwo } from 'enzyme';
import Skills from '../../job_view/skills';

describe('Skills', () => {
  const mockSkills = ['React.JS', 'Angular.io', 'DevOps', 'ExpressJS', 'Google Firebase'];
  const wrapper = shallow(<Skills skills={mockSkills} />);

  it('should render successfully', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render all the passed skills', () => {
    expect(wrapper.find('ul').children()).to.have.length(mockSkills.length);
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import Languages from '../../job_view/languages';

describe('Languages', () => {
  const mockLanguages = ['English', 'French', 'German'];
  const wrapper = shallow(<Languages languages={mockLanguages} />);

  it('should render successfully', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render all the passed languages', () => {
    expect(wrapper.find('ul').children().length).toBe(mockLanguages.length);
  });
});

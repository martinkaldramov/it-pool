import React from 'react';
import { shallow } from 'enzyme';
import Actions from '../../job_view/actions';

describe('Job Actions', () => {
  const mockApply = jest.fn();
  const mockSave = jest.fn();
  const wrapper = shallow(<Actions apply={mockApply} save={mockSave} />);

  it('should render successfully', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call the saveJob function when the SAVE JOB button is clicked', () => {
    wrapper.find('.job-apply').simulate('click');
    expect(mockApply).toHaveBeenCalled();
  });

  it('should call the apply function when the APPLY button is clicked', () => {
    wrapper.find('.job-save').simulate('click');
    expect(mockSave).toHaveBeenCalled();
  });
});

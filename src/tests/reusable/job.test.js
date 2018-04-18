import React from 'react';
import { shallow } from 'enzyme';
import Job from '../../components/reusable/job';

const mockJob = {
  title: 'Proofreading/light editing of a legal document translated from Japanese to English',
  views: 236,
  company: 'MODIS BULGARIA',
  date: new Date().getDate(),
  city: 'Sofia',
  type: 'Full Time',
  experience: 'Solid',
  category: 'Web Development',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet facilisis ligula, ac consectetur nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce venenatis condimentum tristique. Quisque volutpat vulputate dolor, id rhoncus erat euismod id. Sed maximus dignissim arcu ac pretium. Curabitur vel ante at nunc sodales consectetur. Proin et porta sem, ac volutpat tellus. Curabitur ipsum lacus, gravida id fermentum id, pellentesque vitae erat.',
  skills: ['React.JS', 'Angular.io', 'DevOps', 'ExpressJS', 'Google Firebase'],
};

describe('Job', () => {
  const wrap = shallow(<Job jobData={mockJob} />);

  it('should render successfully', () => {
    expect(wrap).toMatchSnapshot();
  });
});

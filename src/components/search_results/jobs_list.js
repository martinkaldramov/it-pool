// @flow
import * as React from 'react';
import Job from './job';

type job = {
  title: string,
  views: number,
  company: string,
  date: ?number,
  city: string,
  type: string,
  experience: string,
  category: string,
  description: string,
  skills: string[],
};

const jobs: job[] = [
  {
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
  },
  {
    title: 'Ericsson FixIT Developer',
    views: 1006,
    company: 'Software Group',
    date: new Date().getDate(),
    city: 'Plovdiv',
    type: 'Part Time',
    experience: 'Medium',
    category: 'Desktop Programming',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet facilisis ligula, ac consectetur nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce venenatis condimentum tristique. Quisque volutpat vulputate dolor, id rhoncus erat euismod id. Sed maximus dignissim arcu ac pretium. Curabitur vel ante at nunc sodales consectetur. Proin et porta sem, ac volutpat tellus. Curabitur ipsum lacus, gravida id fermentum id, pellentesque vitae erat.',
    skills: ['C#', '.NET', 'Visual Studio', 'ExpressJS', 'Google Firebase'],
  },
  {
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
  },
  {
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
  },
];

const JobsList = () => (
  <React.Fragment>
    <ul>{jobs.map(item => <Job jobData={item} />)}</ul>
  </React.Fragment>
);

export default JobsList;

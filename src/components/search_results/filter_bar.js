// @flow
import * as React from 'react';
// Material UI imports
import FlatButton from 'material-ui/FlatButton';

type Filter = {
  name: string,
  categorie: string,
  active: boolean,
};

const mockCofig = {
  jobsFound: 286542,
};

const filters: Filter[] = [
  {
    name: 'Any type',
    categorie: 'type',
    active: false,
  },
  {
    name: 'Full Time',
    categorie: 'type',
    active: true,
  },
  {
    name: 'Part Time',
    categorie: 'type',
    active: false,
  },
  {
    name: 'Intership',
    categorie: 'type',
    active: true,
  },
  {
    name: 'Contract',
    categorie: 'type',
    active: false,
  },
  {
    name: 'Remote',
    categorie: 'type',
    active: false,
  },
  {
    name: 'Any experience',
    categorie: 'experience',
    active: false,
  },
  {
    name: 'Beginner',
    categorie: 'experience',
    active: false,
  },
  {
    name: 'Intermediate',
    categorie: 'experience',
    active: true,
  },
  {
    name: 'Expert',
    categorie: 'experience',
    active: true,
  },
  {
    name: 'Any Views',
    categorie: 'vews',
    active: false,
  },
  {
    name: '< 100',
    categorie: 'vews',
    active: false,
  },
  {
    name: '< 300',
    categorie: 'vews',
    active: true,
  },
  {
    name: '< 600',
    categorie: 'vews',
    active: false,
  },
  {
    name: '< 1000',
    categorie: 'vews',
    active: false,
  },
  {
    name: '1000+',
    categorie: 'vews',
    active: false,
  },
  {
    name: 'Any Number',
    categorie: 'applications',
    active: false,
  },
  {
    name: '< 50',
    categorie: 'applications',
    active: false,
  },
  {
    name: '< 100',
    categorie: 'applications',
    active: true,
  },
  {
    name: '100+',
    categorie: 'applications',
    active: false,
  },
  {
    name: 'Any Time',
    categorie: 'date_posted',
    active: false,
  },
  {
    name: 'Today',
    categorie: 'date_posted',
    active: true,
  },
  {
    name: 'Lat 3 days',
    categorie: 'date_posted',
    active: false,
  },
  {
    name: 'This week',
    categorie: 'date_posted',
    active: false,
  },
  {
    name: 'This month',
    categorie: 'date_posted',
    active: false,
  },
];

const FilterBar = () => {
  const activeFilters = filters.filter(item => item.active);
  const typeFilters = filters.filter(item => item.categorie === 'type');
  const experienceFilters = filters.filter(item => item.categorie === 'experience');
  const viewsFilters = filters.filter(item => item.categorie === 'vews');
  const applicationsFilters = filters.filter(item => item.categorie === 'applications');
  const datePostedFilters = filters.filter(item => item.categorie === 'date_posted');

  return (
    <React.Fragment>
      <p>Showing {mockCofig.jobsFound} results found</p>
      <FlatButton label="Filters" />
      <ul className="active-filters">{activeFilters.map(item => <li>{item.name}</li>)}</ul>
      <h3 className="filter-category">TYPE</h3>
      <ul className="type-filters">{typeFilters.map(item => <li>{item.name}</li>)}</ul>
      <h3 className="filter-category">TYPE</h3>
      <ul className="type-filters">{experienceFilters.map(item => <li>{item.name}</li>)}</ul>
      <h3 className="filter-category">TYPE</h3>
      <ul className="type-filters">{viewsFilters.map(item => <li>{item.name}</li>)}</ul>
      <h3 className="filter-category">TYPE</h3>
      <ul className="type-filters">{applicationsFilters.map(item => <li>{item.name}</li>)}</ul>
      <h3 className="filter-category">TYPE</h3>
      <ul className="type-filters">{datePostedFilters.map(item => <li>{item.name}</li>)}</ul>
      <h3>CATEGORY</h3>
      <input type="text" />
      <h3>LOCATION</h3>
      <input type="text" />
      <h3>COMPANY</h3>
      <input type="text" />
    </React.Fragment>
  );
};

export default FilterBar;

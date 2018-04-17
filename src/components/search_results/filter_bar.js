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
    active: true,
  },
  {
    name: 'Full Time',
    categorie: 'type',
    active: true,
  },
  {
    name: 'Part Time',
    categorie: 'type',
    active: true,
  },
  {
    name: 'Intership',
    categorie: 'type',
    active: true,
  },
  {
    name: 'Contract',
    categorie: 'type',
    active: true,
  },
  {
    name: 'Remote',
    categorie: 'type',
    active: true,
  },
  {
    name: 'Any experience',
    categorie: 'experience',
    active: true,
  },
  {
    name: 'Beginner',
    categorie: 'experience',
    active: true,
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
    active: true,
  },
  {
    name: '< 100',
    categorie: 'vews',
    active: true,
  },
  {
    name: '< 300',
    categorie: 'vews',
    active: true,
  },
  {
    name: '< 600',
    categorie: 'vews',
    active: true,
  },
  {
    name: '< 1000',
    categorie: 'vews',
    active: true,
  },
  {
    name: '1000+',
    categorie: 'vews',
    active: true,
  },
  {
    name: 'Any Number',
    categorie: 'applications',
    active: true,
  },
  {
    name: '< 50',
    categorie: 'applications',
    active: true,
  },
  {
    name: '< 100',
    categorie: 'applications',
    active: true,
  },
  {
    name: '100+',
    categorie: 'applications',
    active: true,
  },
  {
    name: 'Any Time',
    categorie: 'date_posted',
    active: true,
  },
  {
    name: 'Today',
    categorie: 'date_posted',
    active: true,
  },
  {
    name: 'Lat 3 days',
    categorie: 'date_posted',
    active: true,
  },
  {
    name: 'This week',
    categorie: 'date_posted',
    active: true,
  },
  {
    name: 'This month',
    categorie: 'date_posted',
    active: true,
  },
];

const FilterBar = () => {
  const activeFilters = filters.filter(item => item.active);
  const typeFilters = filters.filter(item => item.categorie === 'Types');

  return (
    <React.Fragment>
      <p>Showing {mockCofig.jobsFound} results found</p>
      <FlatButton label="Filters" />
      <ul className="active-filters">{activeFilters.map(item => <li>{item.name}</li>)}</ul>
      <h3 className="filter-category">TYPE</h3>
      <ul className="type-filters">{typeFilters.map(item => <li>{item.name}</li>)}</ul>
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

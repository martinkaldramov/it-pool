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
    name: '100+',
    categorie: 'Vews',
    active: true,
  },
  {
    name: '< 100',
    categorie: 'Applications',
    active: true,
  },
  {
    name: 'This week',
    categorie: 'Posted',
    active: true,
  },
  {
    name: 'Intemediate',
    categorie: 'Experience',
    active: true,
  },
  {
    name: 'Expert',
    categorie: 'Experience',
    active: true,
  },
  {
    name: 'Beginner',
    categorie: 'Experience',
    active: false,
  },
  {
    name: 'Any Type',
    categorie: 'Types',
    active: true,
  },
];

const FilterBar = () => {
  const activeFilters = filters.filter(item => item.active);

  return (
    <React.Fragment>
      <p>Showing `${mockCofig.jobsFound}` results found</p>
      <FlatButton label="Filters" />
      <ul className="active-filters">{activeFilters.map(item => <li>{item.name}</li>)}</ul>
    </React.Fragment>
  );
};

export default FilterBar;

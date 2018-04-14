// @flow
import * as React from 'react';
// Material UI imports
import FlatButton from 'material-ui/FlatButton';

import ActiveFilters from './active_filters';
import StaticFilters from './static_filters';
import InputFilters from './input_filters';

const mockCofig = {
  jobsFound: 286542,
};

type filtersTypes = {
  name: string,
  categorie: string,
  active: boolean,
};

const filters = [
  {
    name: 'Any Type',
    categorie: 'Types',
    active: true,
  },
  {
    name: 'Intemediate',
    categorie: 'Experience',
    active: true,
  },
  {
    name: 'Any Type',
    categorie: 'Types',
    active: true,
  },
];

const FilterBar = () => (
  <React.Fragment>
    <p>Showing `${mockCofig.jobsFound}` results found</p>
    <FlatButton label="Filters" />
    <ActiveFilters filters={filters} />
    <StaticFilters />
    <InputFilters />
  </React.Fragment>
);

export default FilterBar;

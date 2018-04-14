// @flow
import React from 'react';
import ActiveFilters from './active_filters';
import StaticFilters from './static_filters';
import InputFilters from './input_filters';

// Material UI imports
import FlatButton from 'material-ui/FlatButton';

const mockCofig = {
  jobsFound: 286542,
};

let filters:  = []

const FilterBar = () => (
  <React.Fragment>
    <p>Showing `${mockCofig.jobsFound}` results found</p>
    <FlatButton label="Filters" />
    <ActiveFilters />
    <StaticFilters />
    <InputFilters />
  </React.Fragment>
);

export default FilterBar;

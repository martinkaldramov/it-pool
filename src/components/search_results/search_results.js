// @flow
import * as React from 'react';
import FilterBar from './filter_bar';
import JobsList from '../reusable/jobs_list';

const SearchResults = (): React.Node => (
  <React.Fragment>
    <FilterBar />
    <JobsList />
  </React.Fragment>
);

export default SearchResults;

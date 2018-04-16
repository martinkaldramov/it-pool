import React from 'react';
import FilterBar from './filter_bar';
import JobsList from './jobs_list';

const SearchResults = () => (
  <React.Fragment>
    <FilterBar />
    <JobsList />
  </React.Fragment>
);

export default SearchResults;

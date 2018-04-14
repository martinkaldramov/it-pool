import React from 'react';

const mockCofig = {
  jobsFound: 286542,
};

const FilterBar = () => <p>Showing `${mockCofig.jobsFound}` results found</p>;

export default FilterBar;

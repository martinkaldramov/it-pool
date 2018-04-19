// @flow
import * as React from 'react';
import MockProfile from '../../mock_data/mock_profile';

const lastFive: string[] = [];

for (let i = 0; i < 5; i + 1) {
  lastFive.push(MockProfile.recentSearches[i]);
}

const RecentSearches = () => <ul>{lastFive.map(item => <li>{item}</li>)}</ul>;

export default RecentSearches;

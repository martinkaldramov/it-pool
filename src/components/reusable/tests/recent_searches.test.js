import React from 'react';
import { shallow } from 'enzyme';
import RecentSearches from '../recent_searches';
import MockProfile from '../../../mock_data/mock_profile';

describe('RecentSearches0', () => {
  const wrap = shallow(<RecentSearches searches={MockProfile.recentSearches} />);

  it('should render successful', () => {
    expect(wrap).toMatchSnapshot();
  });
});

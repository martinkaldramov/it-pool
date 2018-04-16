import React from 'react';
import { shallow } from 'enzyme';
import SearchResults from '../../containers/search_results/search_results';

describe('SearchResults', () => {
  const wrap = shalow(<SearchResults />);

  it('should render successfully', () => {
    expect(wrap).toMatchSnapshot();
  });
});

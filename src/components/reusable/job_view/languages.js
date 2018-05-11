// @flow
import * as React from 'react';

type Props = {
  languages: string[],
};

const Languages = ({ languages }: Props) => {
  const renderLanguage = language => <li>{language}</li>;

  return (
    <React.Fragment>
      <h4>LANGUAGES</h4>
      <ul>{languages.map(renderLanguage)}</ul>
    </React.Fragment>
  );
};

export default Languages;

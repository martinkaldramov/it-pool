// @flow
import * as React from 'react';

type Props = {
  skills: string[],
};

const Skills = ({ skills }: Props) => {
  const renderSkill = skill => <li>{skill}</li>;

  return (
    <React.Fragment>
      <h4>SKILLS</h4>
      <ul>{skills.map(renderSkill)}</ul>
    </React.Fragment>
  );
};

export default Skills;

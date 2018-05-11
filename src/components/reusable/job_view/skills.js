// @flow
import * as React from 'react';
import renderListItems from '../../../helpers/render_list';

type Props = {
  skills: string[],
};

const Skills = ({ skills }: Props) => (
  <React.Fragment>
    <h4>SKILLS</h4>
    <ul>{skills.map(renderListItems)}</ul>
  </React.Fragment>
);

export default Skills;

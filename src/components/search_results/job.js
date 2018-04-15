// @flow
import * as React from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

type Props = {
  title: string,
  views: number,
  company: string,
  // eslint-disable-next-line
  date: ?{},
  city: string,
  type: string,
  experience: string,
  category: string,
  description: string,
  skills: string[],
};

const Job = (props: Props) => (
  <Card>
    <CardHeader
      title={props.title}
      subtitle={`
        ${props.company} 
        ${props.views}
        ${props.city} 
        ${props.type} 
        ${props.experience} 
        ${props.category}
      `}
    />
    <CardText>
      {props.description}
      {props.skills}
    </CardText>
    <CardActions>
      <RaisedButton label="Like" />
      <RaisedButton label="Save" />
    </CardActions>
  </Card>
);

export default Job;

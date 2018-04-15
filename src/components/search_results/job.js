// @flow
import * as React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

type Props = {
  title: string,
  views: number,
  date: {},
  city: string,
  type: string,
  experience: string,
  category: string,
  description: string,
  skills: string[],
};

const Job = (props: Props) => <p>{props.title}</p>;

export default Job;

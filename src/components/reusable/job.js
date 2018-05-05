// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

type JobData = {
  id: number,
  title: string,
  views: number,
  company: string,
  date: ?number,
  city: string,
  type: string,
  experience: string,
  category: string,
  description: string,
  skills: string[],
};

type Props = {
  jobData: JobData,
};

const Job = (props: Props) => {
  const target = `/jobs/${props.jobData.id}`;
  const jobTitle = <Link to={target} />;

  return (
    <Card>
      <CardHeader
        title={jobTitle}
        subtitle={`
          ${props.jobData.company} 
          ${props.jobData.views}
          ${props.jobData.city} 
          ${props.jobData.type} 
          ${props.jobData.experience} 
          ${props.jobData.category}
        `}
      />
      <CardText>
        {props.jobData.description}
        {props.jobData.skills}
      </CardText>
      <CardActions>
        <RaisedButton label="Like" />
        <RaisedButton label="Save" />
      </CardActions>
    </Card>
  );
};

export default Job;

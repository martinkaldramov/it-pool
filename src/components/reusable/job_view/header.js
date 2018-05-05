// @flow
import * as React from 'react';

type Props = {
  category: string,
  timeStamp: string,
  experience: string,
  company: string,
  views: number,
  city: string,
  type: string,
};

const Header = ({
  category, timeStamp, experience, company, views, city, type,
}: Props) => (
  <div className="job-header">
    <div className="left-side-info">
      <p>
        {category} {timeStamp} {experience}
      </p>
    </div>
    <div className="right-side-info">
      <p>
        {company} {views} {city} {type}
      </p>
    </div>
  </div>
);

export default Header;

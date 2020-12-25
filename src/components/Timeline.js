import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
    const timelineEvents = props.events.map((eventObject, i) => {
    return (
      <li key={i}>
        <TimelineEvent person={eventObject.person} status={eventObject.status} timeStamp={eventObject.timeStamp} />
      </li>
    );
  });
  return (
    <ul className='timeline'>
      {timelineEvents}
    </ul>
  );
};

export default Timeline;
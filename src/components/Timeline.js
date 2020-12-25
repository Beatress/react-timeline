import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
    const timelineEvents = props.eventList.map((eventObject, i) => {
    return (
      <li key={i}>
        <TimelineEvent event={eventObject} />
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
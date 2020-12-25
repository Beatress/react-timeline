import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';
import PropTypes from 'prop-types';

const TimelineEvent = (event) => {
  console.log(event.event);
  console.log(event.person);
  return (
    <section className='timeline-event'>
      <div className='event-person'>
        {event.event.person}
      </div>
      <div className='event-status'>
        {event.event.status}
      </div>
      <time className='event-time'>
        <Timestamp time={event.event.timeStamp} />
      </time>
    </section>
  );
};

TimelineEvent.propTypes = {
  event: PropTypes.shape({
    person: PropTypes.string,
    status: PropTypes.string,
    timeStamp: PropTypes.string
  })
}

export default TimelineEvent;
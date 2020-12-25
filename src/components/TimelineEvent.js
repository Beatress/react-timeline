import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';
import PropTypes from 'prop-types';

const TimelineEvent = (props) => {
  console.log(props.event);
  console.log(props.person);
  return (
    <section className='timeline-event'>
      <div className='event-person'>
        {props.event.person}
      </div>
      <div className='event-status'>
        {props.event.status}
      </div>
      <time className='event-time'>
        <Timestamp time={props.event.timeStamp} />
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
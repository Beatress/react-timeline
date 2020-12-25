import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';
import PropTypes from 'prop-types';

const TimelineEvent = (props) => {
  return (
    <section className='timeline-event'>
      <div className='event-person'>
        {props.person}
      </div>
      <div className='event-status'>
        {props.status}
      </div>
      <time className='event-time'>
        <Timestamp time={props.timeStamp} />
      </time>
    </section>
  );
};

TimelineEvent.propTypes = {
    person: PropTypes.string,
    status: PropTypes.string,
    timeStamp: PropTypes.string
}

export default TimelineEvent;
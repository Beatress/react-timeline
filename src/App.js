import React from 'react';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';
import TimelineEvent from './components/TimelineEvent'

function App() {
  let event={ 
    person: 'Adele Goldberg', 
    status: 'In Smalltalk, everything happens somewhere else.', 
    timeStamp: '2018-05-18T22:12:03Z' 
  } 
  console.log(timelineData);

  // Customize the code below
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">{timelineData.person}'s Social Media feed</h1>
      </header>
      <main className="App-main">
        <TimelineEvent event={event}/>
      </main>
    </div>
  );
}

export default App;

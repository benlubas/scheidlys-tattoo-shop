import React from 'react';
import './App.css';
import QuoteCard from './components/QuoteCard.js'; 

function App() {
  return (
    <div>
      <div>React is just <span style={{ fontWieght: 'bold', fontSize: '1.2em' }}>better</span></div>
      <QuoteCard title="the reason behind all of this" desc="hi" quote="I don't know, go to Scheidlyshandwritingforthepurposeofatattoo.com or something" date="Thur Nov 7, 2019" />
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import './App.css';
import { ClipLoader } from 'react-spinners'


function App() {
  const [isDone, setIsDone] = useState(false);
  const [messages, setMessages] = useState([
    'Loading, please wait...', 
    'Uh, sorry, this is taking longer.', 
    'Still loading, few seconds please.', 
    'So, how are you doing?',
    "We don't know why this is taking long",
    'Still loading...',
    'Hey, is that Caleb?',
    'Caleb Olojo??',
    'Almost there...please wait',
    'Caleb, happy Sunday —and a new week.',
    "So, how're you doing today?",
    "How's life?",
    'We do hope you have less bug these days, uh?',
    'Less than a moment, please...',
    'Loading now.',
    "By the way, how's your girlfriend?",
    "Oh, sorry, you don't have one.",
    'Wait...',
    'So, you just go to bed at night...',
    'After those long hours of writing code...',
    'Adding features, fixing bugs, and...',
    'Just sleep like that, with no one to share love to?',
    'Tell us, how do you do that?',
    "Okay, don't answer that.",
    'Loading...we are preparing your dashboard now.',
    'So, how does it feel?',
    'Lonely?',
    "Don't answer that...",
    'Loading now...',
    'Almost ready now...',
    'Loading...',
    'Are you seriously going to wait till the end?',
    'Okay! Almost there...',
    'This is taking longer than we expected.',
    'Loading...',
    "You realized you've spent time waiting enough to woo a girl?",
    'We are almost there now...',
    'Loading...'
  ])

  useEffect(() => {
    if (messages.length === 1) {
      setIsDone(true);
      return;
    }
    const timeout = timeToReadInMs(messages[0]);
    const id = setTimeout(() => setMessages([].concat(messages.slice(1))), timeout)

    return () => clearTimeout(id);
  }, [messages]);

  if (isDone) {
    document.location = 'https://media.giphy.com/media/E2d2tsgz7iHo4/giphy.gif';
  }
  
  return (
    <div className='container'>
      <div className='display'>
        <ClipLoader color='#3498db' size={32} />

        <span>{ messages[0]}</span>
      </div>
    </div>
  );
}

export default App;

// At 387 words/min.
function timeToReadInMs(sentence) {
  const wordsCount = sentence.split(' ').length;
  return Math.round((3600 * wordsCount) / 387) + 2000;
}
import React, { useEffect, useState } from 'react';
import './App.css';
import { ClipLoader } from 'react-spinners'


function App() {
  const [isDone, setIsDone] = useState(false);
  const [messages, setMessages] = useState([
    ['Loading, please wait...', 5000], 
    ['Uh, sorry, this is taking longer.', 4600], 
    ['Still loading, few seconds please.', 4500], 
    ['So, how are you doing?', 2800],
    ["We don't know why this is taking long", 3300],
    ['Still loading...', 5000],
    ['Hey, is that Caleb?', 3100],
    ['Caleb Olojo??', 2800],
    ['Almost there...please wait', 4400],
    ['Caleb, happy Sunday —and a new week.', 3300],
    ["So, how're you doing today?", 2800],
    ["Accepting response from server...", 4100],
    ["Okay, so how's life?", 3100],
    ['We do hope you have less bug these days, uh?', 3500],
    ['Less than a moment, please...', 5100],
    ['Loading contents.', 4200],
    ["By the way, how's your girlfriend?", 4100],
    ["Oh, sorry, you don't have one.", 3400],
    ['Wait...', 2600],
    ['So, you just go to bed at night...', 3500],
    ['After those long hours of writing code...', 4100],
    ['Adding features, fixing bugs, and...', 2900],
    ['Just sleep like that, with no one to share love to?', 3400],
    ['Tell us, how do you do that?', 3300],
    ["Okay, don't answer that.", 2900],
    ['Loading...we are preparing your dashboard now.', 4500],
    ['So, how does it feel?', 2900],
    ['Lonely?', 2800],
    ["Don't answer that...", 2900],
    ['Loading now...', 4200],
    ['Almost ready now...', 4000],
    ['Loading...', 4400],
    ['Are you seriously going to wait till the end?', 5000],
    ['Okay! Almost there...', 3000],
    ['This is taking longer than we expected.', 4200],
    ['Loading...', 4000],
    ["You realized you've spent time waiting enough to woo a girl?", 4400],
    ['We are almost there now...', 4000],
    ['Loading...', 3500],
  ])

  useEffect(() => {
    if (messages.length === 1) {
      setIsDone(true);
      return;
    }
    const msg = messages[0];
    const id = setTimeout(() => setMessages([].concat(messages.slice(1))), msg[1])

    return () => clearTimeout(id);
  }, [messages]);

  if (isDone) {
    document.location = 'https://media.giphy.com/media/E2d2tsgz7iHo4/giphy.gif';
  }
  
  return (
    <div className='container'>
      <div className='display'>
        <ClipLoader color='#3498db' size={32} />

        <span>{ messages[0][0] }</span>
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
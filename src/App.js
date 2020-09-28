import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './Assets/Styles/App.css';
import StartQuiz from './Components/GettingStarted';
import Quiz from './Components/Quiz';




function App() {
  const [userProfile, setProfile] = useState(null)

  return (
    <div className="App">
      {userProfile === null ?
        <StartQuiz setProfile={setProfile} /> :
        <Quiz username={userProfile.username} />
      }
      <div className="propsTo">
        <a href="https://dribbble.com/bemocs" target="_blank"> ilustration by Brian Edward Miller</a>
      </div>


    </div>
  );
}

export default App;

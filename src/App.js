import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import StartQuiz from './Components/GettingStarted';
import Quiz from './Components/Quiz';




function App() {
  const [userProfile, setProfile] = useState(null)

  return (
    <div className="App">
      <h2>Hello worlds</h2>
      {userProfile === null ?
        <StartQuiz setProfile={setProfile} /> :
        <Quiz username={userProfile.username} />
      }


    </div>
  );
}

export default App;

import './App.css';
import { useState } from 'react';

function App() {
  const [anIdea, setAnIdea] = useState("");

  const fetchAnIdea = async () => {
    const response = await fetch("https://www.boredapi.com/api/activity/");
    const data = await response.json();
    setAnIdea(data.activity)
  }

  return ( <div>
    <div className="container">
      <h1>Bored and don't know what to do?</h1>
      <h2>Click the button below to get an idea!</h2>
      <button onClick={fetchAnIdea}>Get an idea</button>
      <h3>{anIdea}</h3>
    </div>
  </div>
  );
}

export default App;

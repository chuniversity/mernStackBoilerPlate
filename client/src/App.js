import { useState } from 'react';

import './App.css';


function App() {


const [num, setNum] = useState(0)


  function inc () {
    let tempNum = num + 1;
    setNum(tempNum);
    fetch('/test', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        num: tempNum
      })
    })
    .then(response => response.json())
    .then(data => console.log(data));
  };


  return (
    <div className="App">
      <header className="App-header">
        
        <p>{num}</p>
        <button onClick={inc}>increase</button>
      </header>
    </div>
  );
}

export default App;

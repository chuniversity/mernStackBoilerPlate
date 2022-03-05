import { useState, useEffect } from 'react';

import './App.css';


function App() {


const [num, setNum] = useState(0);

const [name, setName] = useState('');

useEffect(() => {
  fetch('/count')
    .then(response => response.json())
    .then(data => {
      setNum(data.count)
    })
});


  function inc () {
    let tempNum = num + 1;
    fetch('/count', {
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
    .then(data => {
      setNum(data.count)
    });
  };

  function submitHandler(e) {
    e.preventDefault();
    setName('');
  }
  function changeHandler(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>{num}</p>
        <button onClick={inc}>increase</button>
        <p></p>
        <form onSubmit={submitHandler}>
          <label> Name: <input value={name} type="text" name="name" onChange={changeHandler} /></label>
        </form>
      </header>
    </div>
  );
}

export default App;

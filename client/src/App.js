import { useState, useEffect } from 'react';

import './App.css';


function App() {

//declare state
const [num, setNum] = useState(0);
const [name, setName] = useState('');
const [names, setNames] = useState('');

// declare useEffect hook
useEffect(() => {
  fetch('/count')
    .then(response => response.json())
    .then(data => {
      setNum(data.count)
    })
  fetch('/name')
  .then(response => response.json())
  .then(data => {
    const tempnames = [];
    data.forEach((item) => {
      tempnames.push(item.name)
    })
    setNames(tempnames);
  })
}, []);

// declare functions
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
    fetch('/name', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name
      })
    })
    .then(response => {
      setName('');
    })
    .catch((error) => {
      console.log(error)
    });
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
        <p></p>
        <div>
        <p>Names:</p>
          {names.length > 0 && names.map((item, index) => (<div key={index}>{item}</div> ))}
        </div>
      </header>
    </div>
  );
}

export default App;

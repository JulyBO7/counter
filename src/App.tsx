import React, { useState } from 'react';
import './App.css';
import { Screen } from './Screen';


export type FilterType = 'inc' | 'reset'

function App() {

  const [counter, setCounter] = useState<number>(0)
  const minValue = 0;
  const maxValue = 5;
  
  const changeCounterValue = (filter: FilterType): void => {
    if (filter === 'inc') {
      let nextCounter = counter + 1
      setCounter(nextCounter)
    }
    if (filter === 'reset') {
      let nextCounter = 0
      setCounter(nextCounter)
    }
  }

  return (
    <div className='App'>
      <Screen counter={counter} 
              changeCounterValue={changeCounterValue}
              minValue={minValue}
              maxValue= {maxValue}
              />
    </div >
  );
}
export default App;




{/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */}
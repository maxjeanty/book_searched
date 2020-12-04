// import logo from './logo.svg';
import React, {useState} from 'react'
import './App.css';
import Header from './components/Header'
import Table from './components/Table'
import {EmplContext} from './context/EmplContext'





function App() {
  const [employees, setEmployees] = useState([])
  const [displayedEmployees, setDisplayedEmployees] = useState([])
  
  return (
    <><EmplContext.Provider value={{employees, setEmployees, displayedEmployees, setDisplayedEmployees}}>
    <Header/>

        <div className="App"> 
        
         <Table/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
    </EmplContext.Provider>
    </>
  );
}

export default App;

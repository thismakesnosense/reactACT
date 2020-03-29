import React from 'react';
import logo from './logo.svg';
import './App.css';
import EmployeeTable from './components/EmployeeTable.js';

const employees = [{name:"nathan"},{name:"jim"}];
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <EmployeeTable employees={employees} />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

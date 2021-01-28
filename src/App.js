import { Unstable_TrapFocus } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import SearchField from './components/SearchField';
import UserTable from './components/UserTable';
import API from './utils/API';

function App() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    API.getRandomUsers().then((res) => {
      console.log(res.data.results);
      setUsers(res.data.results);
      
    });
  }, []);

  const handleSort = () => {

  }

  return (
    <div className="App">
     <NavBar />
     <SearchField />
     <UserTable tableOfUsers={ users } handleSort={ handleSort } />
    </div>
  );
}

export default App;

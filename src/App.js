// import { Unstable_TrapFocus } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import SearchField from './components/SearchField';
import UserTable from './components/UserTable';
import API from './utils/API';
import Container from '@material-ui/core/Container';

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  
  useEffect(() => {
    API.getRandomUsers().then((res) => {
      setUsers(res.data.results);
      
    });
  }, []);

  const handleSortLast = () => {
    const preSort = [...users]
    const sortedUsers = preSort.sort((a,b) => a.name.last > b.name.last ? 1:-1);
    setUsers(sortedUsers);
  }
  const handleSortFirst = () => {
    const preSort = [...users]
    const sortedUsers = preSort.sort((a,b) => a.name.first > b.name.first ? 1:-1);
    setUsers(sortedUsers);
  }
  const handleSortPhone = () => {
    const preSort = [...users]
    const sortedUsers = preSort.sort((a,b) => a.cell > b.cell ? 1:-1);
    setUsers(sortedUsers);
  }
  const handleSortEmail = () => {
    const preSort = [...users]
    const sortedUsers = preSort.sort((a,b) => a.email > b.email ? 1:-1);
    setUsers(sortedUsers);
  }

  const handleInputChange = (event) => {
      let value = event.target.value;
      setSearch(value);
  }

  return (
    <div className="App">
      <Container >   
        <NavBar />
        <SearchField handleInputChange={handleInputChange} search= {search} />
        <UserTable tableOfUsers={ users } search= {search} handleSortLast={ handleSortLast } 
        handleSortFirst= {handleSortFirst} handleSortPhone= {handleSortPhone} 
        handleSortEmail= {handleSortEmail} />
     </Container>
    </div>
  );
}

export default App;

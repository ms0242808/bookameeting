import React, { useState, useEffect } from 'react';
import { fetchUser } from './scripts';
import logo from './logo.svg';
import './App.css';

function App() {
  const [user, setUser] = useState([]);

  const getUser = async (search) => {
    const data = await fetchUser(search);
    setUser(data);
  };

  useEffect(() => {
    getUser('jane_smith');
  }, []);

  const onSearch = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    getUser(formData.get('search'));
  };
  
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <form onSubmit={onSearch}>
        <input placeholder='search user...' name='search' id='search'/>
        <button type='submit'>Search</button>
      </form>
      
      {user.map(item => 
        <div>
          <p key={item.User_id}>ID: {item.User_id}</p>
          <p key={item.Email}>Email: {item.Email}</p>
          <p key={item.Username}>Name: {item.Username}</p>
        </div>
      )}
    </div>
  );
}

export default App;

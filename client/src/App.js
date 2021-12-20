import './App.css';
import React from 'react'
import AppContainer from './components/AppContainer';
<<<<<<< HEAD
import Profile from './components/Profile';
import LogoutButton from './components/LogoutButton';
import LoginButton from './components/LoginButton';
=======
import Header from './components/ui/header'
// import Search from './components/ui/search'
>>>>>>> b3dd9e37eab5a8118848b028021fc246cf5bbf9a

function App() {
    return (
    <div className='main'>
      <Header />
      {/* <Search getQuery={(q) => setQuery(q)} /> */}
      <AppContainer />
    </div>
  );
}

export default App;

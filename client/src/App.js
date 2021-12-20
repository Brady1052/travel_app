import './App.css';
import React from 'react'
import AppContainer from './components/AppContainer';
import Header from './components/ui/header'
// import Search from './components/ui/search'

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

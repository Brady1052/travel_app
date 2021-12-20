import './App.css';
import React from 'react'
import AppContainer from './components/AppContainer';
// import Search from './components/ui/search'

function App() {
    return (
    <div className='main'>
      {/* <Search getQuery={(q) => setQuery(q)} /> */}
      <AppContainer />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import Visited from '../components/Pages/Visited'
import NavTabs from './NavTabs';
import LoggedOutNav from './LoggedOutNav'
import Homepage from './Pages/Homepage';
import '../App.css';

export default function AppContainer() {
  const [currentPage, setCurrentPage] = useState('Homepage');
  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Homepage') {
        return <Homepage />;
      }
    if (currentPage === 'Visited') {
      return <Visited />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <LoggedOutNav currentPage={currentPage} handlePageChange={handlePageChange} />
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  )
}

import React from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import {useAuth0} from '@auth0/auth0-react';
import Header from './ui/header';
import '../App.css';
import SearchForm from './SearchForm';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    isAuthenticated &&(
    <ul className="nav nav-dark bg-dark">
       <li className="nav-item">
        <a 
          href="/"
          onClick={() => handlePageChange('Homepage')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
       Home
        </a>
      </li>
      
      {/* <li id="button1"className="nav-item">
       <LoginButton className='button1'/>
       <LogoutButton className='button1'/>
      </li> */}
      <li className="nav-item">    
        <a
          href="#visited"
          onClick={() => handlePageChange('Visited')}
          className={currentPage === 'Visited' ? 'nav-link active' : 'nav-link'}
        >
        Visited
        </a>
      </li>
     <SearchForm id="searchForm"/>
<li>
  <Header />
</li>
<li id="button1"className="nav-item">
       <LoginButton className='button1'/>
       <LogoutButton className='button1'/>
      </li>
    </ul>
  ))
}

export default NavTabs;

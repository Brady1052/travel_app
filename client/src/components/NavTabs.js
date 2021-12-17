import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
       <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('Homepage')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
       Home
        </a>
      </li>
      
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          Login
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#visited"
          onClick={() => handlePageChange('Visited')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Visited' ? 'nav-link active' : 'nav-link'}
        >
        Visited
        </a>
      </li>
      
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <span class="container-fluid">
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search City" aria-label="Search"></input>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </span>
</nav>

    </ul>
  );
}

export default NavTabs;

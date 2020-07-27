import React from 'react';


function Nav(props) {
  const tabs = ['About Me', 'Portfolio', 'Contact', 'Resume'];

  return (

    <nav class="navbar navbar-expand-md bg-dark navbar-dark">
  <a class="navbar-brand" href="#">J. Hartshorn</a>

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
    <ul className="nav">
      {tabs.map(tab => (
        <li className="" key={tab}>
          <a
            href={'#' + tab.toLowerCase()}
            onClick={() => props.handlePageChange(tab)}
            className={
              props.currentPage === tab ? 'nav-link active' : 'nav-link'
            }
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
    </nav>

  );
}

export default Nav;
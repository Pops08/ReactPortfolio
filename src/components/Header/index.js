import React, { useState } from 'react';
import Nav from '../Nav';
import AboutMe from '../pages/aboutme';
import Portfolio from '../Portfolio';
import Contact from '../pages/contact';
// import Resume from '../pages/resume';
import 'bootstrap/dist/css/bootstrap.min.css';

function PortfolioHeader() {
  const [currentPage, handlePageChange] = useState('About');



  const renderPage = () => {
    // Add a switch statement that will return the appropriate component of the 'currentPage'
    switch(currentPage) {
      case 'About': 
      return (<AboutMe />)

      case 'Portfolio': 
      return (<Portfolio />)

      case 'Contact': 
      return (<Contact/>)

    //   case 'Resume':
    //   return (<Resume></Resume>)

      default: 
      return(<AboutMe />)
    }

  };

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>
        {
          // Render the component returned by 'renderPage()'
          renderPage()
        }
      </div>
    </div>
  );
}

export default PortfolioHeader;
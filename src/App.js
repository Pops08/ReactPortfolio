import React, {useState} from 'react';
import AboutMe from './components/About'
import Nav from './components/Nav'
import ContactForm from './components/Contact'
import 'bootstrap/dist/css/bootstrap.min.css';

// import Portfolio from './components/Portfolio'

function App() {

  const [contactSelected, setContactSelected] = useState(false);
  const [abSelected, setABSelected] = useState(true);

  return (

    <div>
<Nav
  // tabs={tabs}
  // setCurrentTab={setCurrentTab}
  // currentTab={currentTab}
  // contactSelected={contactSelected}
  // setContactSelected={setContactSelected}
></Nav>
      <main>
        if (condition) {
          
        }
        <AboutMe />

      </main>
    </div>

  );
}

export default App;

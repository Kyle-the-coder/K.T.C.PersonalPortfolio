
import './App.css';
import NavbarStyle from './components/Navbar';
import AboutMe from './views/AboutMe';
import DisplayProjects from './views/DisplayProjects';
import ContactMe from './views/ContactMe';
import { useState } from 'react';
import LandingPage from './views/LandingPage';
import SkillsList from './views/SkillsList';
import {Helmet} from "react-helmet";


function App() {
  const [totalView, setTotalView] = useState(true)

  const changeView = () => {
    if (totalView === true) {
      setTotalView(false)
    } else if (totalView === false) {
      setTotalView(true)
    }

  }
  return (
    <div className='backgroundMain'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>K.T.C.</title>
        <link rel="canonical" href="http://kylethecoder.com" />
      </Helmet>
      <div className='background'>

        <NavbarStyle />

        <LandingPage />

        <AboutMe />
        <SkillsList changeView={changeView} />
        <DisplayProjects totalView={totalView} />
        <ContactMe />
      </div>

    </div>
  );
}

export default App;


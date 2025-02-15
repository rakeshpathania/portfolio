import React, { useState, createContext } from 'react'
import Sidebar from './Components/Sidebar/Sidebar.js';
import About from './Components/About/About.js';
import TechStack from './Components/TechStack/TechStack.js';
import Project from './Components/Projects/Project.js';
import WorkExperience from './Components/WorkExperience/WorkExperience.js';
import Education from './Components/Education/Education.js';
import Interest from './Components/Interest/Interest.js';
import Contact from './Components/Contact/Contact.js';
import ScrollToTop from "react-scroll-to-top";
import "./App.css";
import NavbarMobileView from './Components/NavbarMobileView/NavbarMobileView.js';

export const ThemeContext = createContext(null)
const App = () => {

  const [theme, setTheme] = useState('light');
  const changeTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <div id={theme}>
        <NavbarMobileView theme={theme} changeTheme={changeTheme} />
        <Sidebar theme={theme} changeTheme={changeTheme}/>
        <About />
        <TechStack />
        <WorkExperience />
        <Project />
        <Education />
        <Interest />
        <Contact />
      </div>

      <ScrollToTop smooth={true}
        top="20"
        color='white'
        height='20'
        width='20'
        style={{ borderRadius: "90px", backgroundColor: "#282828" }}


      />
    </ThemeContext.Provider>
  )

}

export default App;

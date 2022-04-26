import React, { useState } from 'react';
import { Container } from "./components/styles/Container.styled";
import Header from "./components/header";
import Profile from "./components/profile";

// styles
import { GlobalStyles } from "./components/styles/GlobalStyle";
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './components/styles/Theme';
import { StyledHeader, StyledToggleBar } from './components/styles/Header.styled';

// svg components
import { ReactComponent as Moon } from '../src/assets/icons/moon.svg';
import { ReactComponent as Sun } from '../src/assets/icons/002-sun.svg';


function App() {
  // theme toggle 
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }

  }

  // function to change the text and svg inside the toggle bar, depending on the state
  function ToggleBar(props) {
    return (
      <StyledToggleBar onClick={toggleTheme}>
          <p>{toggleText}</p>
          {toggleIcon}
      </StyledToggleBar>
    )
  }

  // values to be passed to the toggle bar 
  let toggleText = theme === 'light' ? "DARK" : "LIGHT";
  let toggleIcon = theme === 'light' ? <Moon /> : <Sun />;


  return (
    <ThemeProvider theme = {theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles />
        <Container>

          <StyledHeader>
            <h1>devfinder</h1>
            <ToggleBar />
          </StyledHeader>

          <Profile />
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;

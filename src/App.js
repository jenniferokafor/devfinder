import React, { useState } from 'react';
import { Container } from "./components/styles/Container.styled";
import Header from "./components/header";
import Profile from "./components/profile";

// styles
import { GlobalStyles } from "./components/styles/GlobalStyle";
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './components/styles/Theme';


function App() {
  return (
    <ThemeProvider theme = {darkTheme}>
      <>
      <GlobalStyles />
        <Container>
          <Header />
          <Profile />
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;

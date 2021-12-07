import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, lightMode, darkMode } from './themes'
import { StyledApp } from './Styles/App.styled'
import ThemeToggle from './components/ThemeToggle';

  

function App() {
  const [darkTheme, setdarkTheme] = useState(false)

  // Toggle Function
  const themeToggler = () => {
    setdarkTheme(!darkTheme)
  }

  return (
    <ThemeProvider theme={darkTheme ?  darkMode : lightMode}>
      <GlobalStyles />
      <StyledApp>
        <ThemeToggle theme = {darkTheme} themeToggler={themeToggler}/>
      </StyledApp>
    </ThemeProvider>
  )
}

export default App;

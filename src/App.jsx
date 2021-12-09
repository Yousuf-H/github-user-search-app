import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, lightMode, darkMode } from './themes'
import { StyledApp } from './Styles/App.styled'  
import Display from './components/Display';

function App() {
  const [theme, setTheme] = useState(false)

  // Toggle Function
  const themeToggler = () => {
    setTheme(!theme)
  }

  return (
    <ThemeProvider theme={theme ?  darkMode : lightMode}>
      <GlobalStyles />
      <StyledApp>
        <Display theme = {theme} themeToggler={themeToggler}/>
      </StyledApp>
    </ThemeProvider>
  )
}

export default App;

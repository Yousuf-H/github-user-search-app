import React from 'react'
import { Container, ThemeMode, Title } from '../Styles/Display.styled'
import ThemeToggle from './ThemeToggle';
import Search from './Search'
const Display = ({ theme, themeToggler }) => {
  return (
    <Container>
      {/* Theme Toogle */}
      <ThemeMode>
        <Title>devfinder</Title>
        <ThemeToggle theme = {theme} themeToggler={themeToggler}/>
      </ThemeMode>
      {/* Search */}
      <Search />
    </Container>
  )
}

export default Display
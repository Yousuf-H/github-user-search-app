import React from 'react'
import { Container, ThemeMode, Title } from '../Styles/Display.styled'
import ThemeToggle from './ThemeToggle';
import Search from './Search'
import Result from './Result';
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

      {/* Result */}
      <Result />
    </Container>
  )
}

export default Display
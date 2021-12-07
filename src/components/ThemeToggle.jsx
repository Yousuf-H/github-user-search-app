import React from 'react';
import { Container, ThemeIcon } from '../Styles/ThemeToggle.styled'
import Dark from '../assets/icon-moon.svg'
import light from '../assets/icon-sun.svg'

const ThemeToggle = ({ theme, themeToggler }) => {
  
  console.log(theme)
  return (
    <Container>
      {theme ? 
        <ThemeIcon src={light} alt='Moon Icon' onClick={themeToggler}/> :  
        <ThemeIcon src={Dark} alt='Moon Icon' onClick={themeToggler}/>
      }
    </Container>
  );
};

export default ThemeToggle;
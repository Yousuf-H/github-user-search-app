import React from 'react';
import { Container, ThemeIcon, Wrapper, H1 } from '../Styles/ThemeToggle.styled'
import Dark from '../assets/icon-moon.svg'
import light from '../assets/icon-sun.svg'

const ThemeToggle = ({ theme, themeToggler }) => {
  return (
    <Container>
      {theme ? 
        <Wrapper>
          <H1>Light</H1>
          <ThemeIcon src={light} alt='Sun Icon' onClick={themeToggler}/>
        </Wrapper> 
        :  
        <Wrapper>
          <H1>Dark</H1>
          <ThemeIcon src={Dark} alt='Moon Icon' onClick={themeToggler}/>
        </Wrapper>
      }
    </Container>
  );
};

export default ThemeToggle;
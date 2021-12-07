import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body};
  }
`
export const lightMode = {
  body: '#F6F8FF',
  fontColor: '#000'
}

export const darkMode = {
  body: '#141D2F',
  fontColor: '#fff'
}


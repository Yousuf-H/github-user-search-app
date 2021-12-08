import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body};
  }
`
export const lightMode = {
  body: '#F6F8FF',
  fontColor: '#000',
  buttonColor: '#0079FF',
  placeholderColor: '#4B6A9B',
  SearchContainerColor: '#FEFEFE'
}

export const darkMode = {
  body: '#141D2F',
  fontColor: '#FFF',
  buttonColor: '#0079FF',
  placeholderColor: '#FFF',
  SearchContainerColor: '#1E2A47'
}


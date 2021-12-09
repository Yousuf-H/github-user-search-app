import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body};
    transition: all 1s linear;
  }
`
export const lightMode = {
  body: '#F6F8FF',
  fontColor: '#4B6A9B',
  blackShade: '#222731',
  buttonBgColor: '#0079FF',
  buttonColor: '#FFFFFF',
  placeholderColor: '#4B6A9B',
  SearchContainerColor: '#FEFEFE',
  ResultBackgroundColor: '#FEFEFE',
  searchBoxShadow: '#E0E0E0'
}

export const darkMode = {
  body: '#141D2F',
  fontColor: '#FFF',
  buttonBgColor: '#0079FF',
  placeholderColor: '#FFF',
  buttonColor: '#FFFFFF',
  SearchContainerColor: '#1E2A47',
  ResultBackgroundColor: '#1E2A47',
  grayShade: '#90A4D4',
  searchBoxShadow: '#141D2F'
}


import styled from "styled-components";

export const Container = styled.div`
  width: 50vw;
  min-width: 560px;
  height: 650px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* border: 2px red solid; */
`
export const ThemeMode = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Title = styled.h1`
  font-size: 26px;
  color: ${props => props.theme.blackShade}
`
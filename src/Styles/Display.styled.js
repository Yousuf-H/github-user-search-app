import styled from "styled-components";

export const Container = styled.div`
  width: 70vw;
  max-width: 730px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 700px;
  }
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
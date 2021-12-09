import styled from "styled-components";

export const Container = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
export const Wrapper = styled.div`
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const H1 = styled.h1`
  font-size: 13px;
  text-transform: uppercase;
  color: ${props => props.theme.blackShade};
`
export const ThemeIcon = styled.img`
  width: 20px;
  height:20px;
  cursor: pointer;
  color: green;
`


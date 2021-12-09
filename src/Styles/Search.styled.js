import styled from "styled-components";

export const Container = styled.div`
  height: 69px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.SearchContainerColor};
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0px 5px 10px ${props => props.theme.searchBoxShadow};
`

export const Left = styled.div`
  display: flex;
  width: 440px;
  align-items: center;
`

export const Right = styled.div`
  display: flex;
  width: 230px;
  justify-content: space-between;
  align-items: center;
`

export const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
`

export const SearchInput = styled.input`
  font-size: 18px;
  color: ${props => props.theme.fontColor};;
  width: 100%;
  height: 50px;
  outline-color: transparent;
  padding: 20px;
  border: none;
  background-color: transparent;
  
  &::placeholder {
    color: ${props => props.theme.placeholderColor};
  }

  &:focus {
    outline: 2px dashed transparent;
  }
`

export const Error = styled.span`
  color: red;
  height: 50px;
  display: flex;
  align-items: center;
`

export const SearchButton = styled.button`
  width: 106px;
  height: 50px;
  border: none;
  border-radius: 10px;
  background-color: ${props => props.theme.buttonBgColor};
  color: ${props => props.theme.buttonColor};;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: '#60ABFF';
  }
`


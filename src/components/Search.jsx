import React, { useState } from 'react';
import { Container, SearchIcon, SearchInput, Error, SearchButton, Left, Right } from '../Styles/Search.styled';
import SearchSVG from '../assets/icon-search.svg'
import { getUserAction } from '../redux/actions/userInfoAction'
import { connect } from 'react-redux'

const Search = (props) => {
  const [searchValue, setSearchValue] = useState('')
  const { githubUser, dispatch } = props

  const changeHandler = (e) => {
    setSearchValue(e.target.value)
  }

  const clickhandler = () => {
    if (searchValue){
      dispatch(getUserAction(searchValue))
    }
  }

  return (
    <Container>
      {/* Left */}
      <Left>
        <SearchIcon src={SearchSVG}/>
        <SearchInput placeholder='Search Github username...' onChange={(e) => changeHandler(e)} value={searchValue} required/>
      </Left>
      
      {/* Right */}
      <Right>
        <Error>{githubUser.errMessage && 'No results'}</Error>
        <SearchButton onClick={clickhandler}>Search</SearchButton>
      </Right>
    </Container>
  );
};

const mapStateToProps = ({ githubUser }) => {
  return {
    githubUser
  }
}

export default connect(mapStateToProps)(Search)

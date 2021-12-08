import React from 'react';
import { Container, SearchIcon, SearchInput, Error, SearchButton, Left, Right } from '../Styles/Search.styled';
import SearchSVG from '../assets/icon-search.svg'

const Search = () => {
  return (
    <Container>
      {/* Left */}
      <Left>
        <SearchIcon src={SearchSVG}/>
        <SearchInput placeholder='Search Github username...'/>
      </Left>
      
      {/* Right */}
      <Right>
        <Error>No results</Error>
        <SearchButton>Search</SearchButton>
      </Right>
    </Container>
  );
};

export default Search;
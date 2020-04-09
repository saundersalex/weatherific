import React from 'react';
import styled from '@emotion/styled';

const SearchInput = styled.input`
  width: 100%;
  border: none;
  border-radius: 8px;
  background-color: #F0EEF7;
  font-size: 11pt;
  padding: 10px 10px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 12pt;
    padding: 15px 20px;
    margin-left: 30px;
    text-align: left;
  }
`;

const SearchBar = () => {
  return <SearchInput placeholder="What's your favourite city?" type="text" name="city" />;
};

export default SearchBar;

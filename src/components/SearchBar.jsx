import React, {useState} from 'react';
import styled from '@emotion/styled';

const SearchInput = styled.input`
  width: 100%;
  border: none;
  border-radius: 25px;
  background-color: #F0EEF7;
  font-size: 11pt;
  padding: 10px 10px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 12pt;
    padding: 15px 20px;
    margin-left: 30px;
  }
`;

const SearchBar = ({defaultLocation, onLocationChange}) => {
  // Note: Normally copying props into state is an antipattern, but in this instance
  // for a default value of an input, I'm going to let it slide!
  const [value, setValue] = useState(defaultLocation || '');

  const onValueChange = (value) => {
    setValue(value);
    onLocationChange(value);
  };

  return <SearchInput placeholder="What's your favourite city?" type="text" name="city" value={value} onChange={(e) => onValueChange(e.target.value)} />;
};

export default SearchBar;

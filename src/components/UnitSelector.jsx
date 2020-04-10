import React from 'react';
import styled from '@emotion/styled';

const UnitsContainer = styled.div`
  font-size: 12pt;
  padding-top: 5px;
  padding-left: 10px;
`;

const UnitButton = styled.button`
  background: transparent;
  border: none;
  color: ${({units, btnUnit}) => units === btnUnit ? 'black' : 'blue'};
  font-weight: ${({units, btnUnit}) => units === btnUnit ? 'normal' : 'bold'};
`;

const UnitSelector = ({units, onUnitsChange}) => {
  return <UnitsContainer>
    <UnitButton btnUnit={'metric'} units={units} onClick={() => {units === 'imperial' && onUnitsChange('metric')}}>
      &deg;C
    </UnitButton>
    <span> | </span>
    <UnitButton btnUnit={'imperial'} units={units} onClick={() => {units === 'metric' && onUnitsChange('imperial')}}>
      &deg;F
    </UnitButton>
  </UnitsContainer>;
};

export default UnitSelector;

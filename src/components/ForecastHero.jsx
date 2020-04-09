import React from 'react';
import styled from '@emotion/styled';

const ForecastHeroContainer = styled.div`
  background-color: pink;
  padding: 10px;
`;

const ForecastHero = ({weatherData, setUnits}) => {
  return <ForecastHeroContainer>
    <span>Details</span>
  </ForecastHeroContainer>;
};

export default ForecastHero;

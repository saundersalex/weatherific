import React from 'react';
import styled from '@emotion/styled';

const HourlyForecastContainer = styled.div`
  background-color: orange;
  padding: 10px;
`;

const HourlyForecastRow = ({weatherData, setUnits}) => {
  return <HourlyForecastContainer>
    <span>Details</span>
  </HourlyForecastContainer>;
};

export default HourlyForecastRow;

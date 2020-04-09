import React from 'react';
import styled from '@emotion/styled';

import ForecastPreviewCard from './ForecastPreviewCard';
import ForecastHero from './ForecastHero';
import HourlyForecastRow from './HourlyForecastRow';

const DetailsContainer = styled.div`
  background-color: green;
  padding: 10px;
`;

const Location = styled.h1`
  font-size: 24pt;
  font-weight: 700;
  text-transform: uppercase;
`;

const ForecastDetails = ({weatherData, setUnits}) => {
  return <DetailsContainer>
    <Location>Vancouver, CA</Location>
    
    <ForecastPreviewCard />

    <ForecastHero />
  </DetailsContainer>;
};

export default ForecastDetails;

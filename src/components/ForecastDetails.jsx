import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import moment from 'moment';

import ForecastPreviewCard from './ForecastPreviewCard';
import ForecastHero from './ForecastHero';
import HourlyForecastRow from './HourlyForecastRow';

import {groupWeatherDataByDate} from '../util';

const DetailsContainer = styled.div`
  background-color: green;
  padding: 10px;
`;

const Location = styled.h1`
  font-size: 24pt;
  font-weight: 700;
  text-transform: uppercase;
`;

const ForecastDetails = ({weatherData: {city, list}, setUnits}) => {

  const [selectedDate, setSelectedDate] = useState(false);
  const weatherByDate = groupWeatherDataByDate(list);

  console.log('Weather By Date is', weatherByDate, Object.keys(weatherByDate));

  return <DetailsContainer>
    <Location>{city.name}, {city.country}</Location>
    
    {Object.keys(weatherByDate).length > 0 && Object.keys(weatherByDate).forEach((dateKey, ix) => {
      return <ForecastPreviewCard
        key={`${dateKey}-${ix}`}
        isSelected={selectedDate === dateKey}
        onPress={() => setSelectedDate(ix)}
        onUnitChange={setUnits}
      />;
    })}

    <ForecastHero />
    
    {selectedDate && weatherByDate[selectedDate].forEach((weatherData, ix) => {
      return <HourlyForecastRow key={`${weatherData.dt}-${ix}`} weatherData={weatherData} />
    })}
  </DetailsContainer>;
};

export default ForecastDetails;

import React, {useState} from 'react';
import styled from '@emotion/styled';

import ForecastPreviewCard from './ForecastPreviewCard';
import ForecastHero from './ForecastHero';
import HourlyForecastRow from './HourlyForecastRow';

import {groupWeatherDataByDate} from '../util';

const DetailsContainer = styled.div`
  margin: 0 auto;
  padding: 10px;

  @media (min-width: 768px) {
    max-width: 700px;
  }
`;

const Location = styled.h1`
  font-size: 20pt;
  font-weight: 700;
`;

const HourlyTitle = styled.h2`
  font-size: 18pt;
  margin-top: 40px;
  margin-bottom: 20px;
`;

const ForecastDaysContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  overflow-x: auto;
  width: calc(100vw - 20px);
  
  @media (min-width: 768px) {
    overflow: hidden;
    margin-right: 0;
    width: 100%;
    justify-content: space-between;
  }
`;

const ForecastDetails = ({weatherData: {city, list}, units}) => {
  const weatherByDate = groupWeatherDataByDate(list);
  const uniqueWeatherDates = Object.keys(weatherByDate);
  const [selectedDate, setSelectedDate] = useState(0);
  const selectedDateForecasts = weatherByDate[uniqueWeatherDates[selectedDate]];

  return (
    <DetailsContainer>
      <Location>{city.name}, {city.country}</Location>

      <ForecastDaysContainer>
        {uniqueWeatherDates.length > 0 && uniqueWeatherDates.map((dateKey, ix) => {
          return <ForecastPreviewCard
            key={`${dateKey}-${ix}`}
            weatherData={weatherByDate[dateKey]}
            isSelected={selectedDate === ix}
            onPress={() => setSelectedDate(ix)}
            isLastCard={ix === uniqueWeatherDates.length - 1}
          />;
        })}
      </ForecastDaysContainer>

      <ForecastHero units={units} city={city} weatherData={selectedDateForecasts[0]} />   

      <HourlyTitle>Hourly Forecasts</HourlyTitle>
      {selectedDateForecasts.map((weatherData, ix) => (
        <HourlyForecastRow
          key={`${weatherData.dt}-${ix}`}
          weatherData={weatherData}
        />
      ))}
    </DetailsContainer>
  );
};

export default ForecastDetails;

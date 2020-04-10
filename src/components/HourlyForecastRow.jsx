import React from 'react';
import styled from '@emotion/styled';
import moment from 'moment';

const HourlyForecastContainer = styled.div`
  background-color: orange;
  border-radius: 4px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const WeatherDescription = styled.span`
  text-transform: capitalize;
`;

const WeatherImage = styled.img`
  width: 44px;
  margin: 0 5px;
`;

const Fill = styled.div`
  flex: 1;
`;

const HourlyForecastRow = ({weatherData, setUnits}) => {

  const friendlyTime = moment(weatherData.dt * 1000).format('h:mm A');

  const weatherIcon = weatherData.weather[0].icon;
  const iconImageSource = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

  return <HourlyForecastContainer>
    <strong>{friendlyTime}</strong>
    <WeatherImage src={iconImageSource} />
    <strong>{Math.round(weatherData.main.temp)}&deg;</strong>
    <Fill />
    <WeatherDescription>{weatherData.weather[0].description}</WeatherDescription>
  </HourlyForecastContainer>;
};

export default HourlyForecastRow;

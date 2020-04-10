import React from 'react';
import styled from '@emotion/styled';
import moment from 'moment';

const HourlyForecastContainer = styled.div`
  background-color: #FFA500;
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

const HourlyForecastRow = ({weatherData}) => {
  const friendlyTime = moment(weatherData.dt * 1000).format('h:mm A');
  const {icon, description} = weatherData.weather[0];
  const iconImageSource = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  const roundedTemperature = Math.round(weatherData.main.temp);

  return (
    <HourlyForecastContainer>
      <strong>{friendlyTime}</strong>
      <WeatherImage src={iconImageSource} />
      <strong>{roundedTemperature}&deg;</strong>
      <Fill />
      <WeatherDescription>{description}</WeatherDescription>
    </HourlyForecastContainer>
  );
};

export default HourlyForecastRow;

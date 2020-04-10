import React from 'react';
import styled from '@emotion/styled';
import moment from 'moment';

const CardContainer = styled.div`
  background-color: ${({isSelected}) => isSelected ? '#050044' : '#FAFAFA'};
  border: 1px solid transparent;
  color: ${({isSelected}) => isSelected ? '#fff' : 'inherit'};
  padding: 15px 0;
  font-size: 10pt;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  min-width: 105px;
  flex-grow: 1;
  height: 120px;
  margin-right: ${({isLastCard}) => isLastCard ? '0' : '8px'};

  :hover {
    border: 1px solid ${({isSelected}) => isSelected ? 'inherit' : '#ccc'};
  }
`;

const HighTemp = styled.strong`
  margin-right: 10px;
`;

const LowTemp = styled.span`
  opacity: .75;
`;

const WeatherImage = styled.img`
  max-width: 50px;
`;

const ForecastPreviewCard = ({weatherData, isSelected, onPress, isLastCard}) => {
  
  const mostRecentWeatherForecast = weatherData[0];
  const lowTemp = Math.round(Math.min(...weatherData.map((data) => data.main.temp)));
  const highTemp = Math.round(Math.max(...weatherData.map((data) => data.main.temp)));
  const friendlyDay = moment(mostRecentWeatherForecast.dt * 1000).format('dddd');
  const weatherIcon = mostRecentWeatherForecast.weather[0].icon;
  const iconImageSource = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
  
  return <CardContainer isLastCard={isLastCard} isSelected={isSelected} onClick={onPress}>
    <strong>{friendlyDay}</strong>
    <WeatherImage src={iconImageSource} alt={'Weather Icon'} />
    <div>
      <HighTemp>{highTemp}&deg;</HighTemp>
      <LowTemp>{lowTemp}&deg;</LowTemp>
    </div>
  </CardContainer>;
};

export default ForecastPreviewCard;

import React from 'react';
import styled from '@emotion/styled';
import moment from 'moment';

const ForecastHeroContainer = styled.div`
  margin: 40px 0 20px 0;
`;

const ForecastInfo = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  padding: 20px 10px;
  border-radius: 8px;
  background-color: #050044;
  color: #FFFFFF;
`;

const WeatherDate = styled.h1`
  font-size: 18pt;
`;

const WeatherImage = styled.img`
  width: 100px;
`;

const TemperatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  font-size: 28pt;
`;

const WeatherConditions = styled.span`
  font-size: 14pt;
  margin: 0;
  font-weight: normal;
  text-transform: capitalize;
`;

const WeatherStatistics = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 5px;
  display: flex;
  flex: 1;
  flex-direction: column;
  color: #FFFFFF;
  align-items: center;

  @media (min-width: 768px) {
    align-items: flex-start;
    border-top: none;
    padding-top: 0;
  }
`;

const Break = styled.div`
  flex-basis: 100%;
  height: 0;

  @media (min-width: 768px) {
    flex-basis: inherit;
  }
`;

const WeatherStat = styled.span`
  padding: 10px 2px 10px 2px;
  width: 100%;
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media (min-width: 768px) {
    text-align: left;
  }

  :last-child {
    border-bottom: none;
  }
`;

const ForecastHero = ({weatherData, units, city}) => {

  const {icon, description} = weatherData.weather[0];
  const iconImageSource = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  const windUnits = units === 'metric' ? 'm/s' : 'mph';
  const weatherDate = moment(weatherData.dt * 1000).format('dddd, MMMM D [at] h:mm A');
  const roundedTemperature = Math.round(weatherData.main.temp);

  return (
    <ForecastHeroContainer>
      <WeatherDate>{weatherDate}</WeatherDate>
      <ForecastInfo>
        <WeatherImage src={iconImageSource} alt={'Weather Icon'} />
        <TemperatureContainer>
          {roundedTemperature}&deg;
          <WeatherConditions>{description}</WeatherConditions>
        </TemperatureContainer>
        <Break />
        <WeatherStatistics>
          {city.sunrise && <WeatherStat><strong>Sunrise:</strong> {moment(city.sunrise * 1000).format('h:mm A')}</WeatherStat>}
          {city.sunset && <WeatherStat><strong>Sunset:</strong> {moment(city.sunset * 1000).format('h:mm A')}</WeatherStat>}
          {weatherData.clouds && <WeatherStat><strong>Cloudiness:</strong> {weatherData.clouds.all}%</WeatherStat>}
          {weatherData.wind && <WeatherStat><strong>Wind Speed:</strong> {weatherData.wind.speed} {windUnits}</WeatherStat>}
          {weatherData.rain && <WeatherStat><strong>3h Rain Vol:</strong> {weatherData.rain['3h']} mm</WeatherStat>}
          {weatherData.snow && <WeatherStat><strong>3h Snow Vol:</strong> {weatherData.snow['3h']} mm</WeatherStat>}
        </WeatherStatistics>
      </ForecastInfo>
    </ForecastHeroContainer>
  );
};

export default ForecastHero;

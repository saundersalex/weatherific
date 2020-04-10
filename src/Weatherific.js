import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import {useDebounce} from 'use-debounce';

import Header from './components/Header';
import LoadingIndicator from './components/LoadingIndicator';
import ForecastDetails from './components/ForecastDetails';
import GetStarted from './components/GetStarted';

import forecastService from './forecast.service';

const WeatherificContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
`;

const Weatherific = () => {

  const params = new URLSearchParams(window.location.search);
  const locationFromURL = params.get('location');

  const [location, setLocation] = useState(locationFromURL || 'Kelowna');
  const [debouncedLocation] = useDebounce(location, 1000);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [units, setUnits] = useState('metric');
  const [weatherData, setWeatherData] = useState(null);

  // Effect to load data from OWM API when location or units change.
  useEffect(() => {
    const fetchWeatherForecast = async () => {
      setLoading(true);
      setError(false);
      setWeatherData(null);

      if (debouncedLocation.length < 3) {
        setLoading(false);
        return;
      }

      try {
        const {list, city} = await forecastService.findForecastByCityNameWithUnits(debouncedLocation, units);
        setWeatherData({list, city});
      } catch (err) {
        console.error('Error fetching forecast', err);
        setError(err.message || 'An unknown error occurred. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherForecast();
  }, [debouncedLocation, units]);

  return (
    <WeatherificContainer>
      <Header location={location} setLocation={setLocation} units={units} setUnits={setUnits} />
      {loading && (
        <LoadingContainer>
          <LoadingIndicator size={44} />
        </LoadingContainer>
      )}
      {error && (
        <span>Error!</span>
      )}
      {debouncedLocation.length < 3 && <GetStarted />}
      {!loading && !error && weatherData && <ForecastDetails weatherData={weatherData} units={units} setUnits={setUnits} />}
      
      <pre>{JSON.stringify({ location, debouncedLocation, loading, error, units, weatherData }, ' ', 4)}</pre>
    </WeatherificContainer>
  );
};

export default Weatherific;

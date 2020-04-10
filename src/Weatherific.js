import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import {useDebounce} from 'use-debounce';

import Header from './components/Header';
import LoadingIndicator from './components/LoadingIndicator';
import ForecastDetails from './components/ForecastDetails';
import ErrorAlert from './components/ErrorAlert';
import GetStarted from './components/GetStarted';
import Footer from './components/Footer';

import forecastService from './forecast.service';

const WeatherificContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: ${window.innerHeight}px;
`;

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
`;

const ErrorContainer = styled.div`
  max-width: 800px;
  margin: 10px auto;
  padding: 10px;
  margin-bottom: -15px;
`;

const FlexFill = styled.div`
  flex: 1;
`;

const Weatherific = () => {

  const params = new URLSearchParams(window.location.search);
  const locationFromURL = params.get('location');

  const [location, setLocation] = useState(locationFromURL || '');
  const [debouncedLocation] = useDebounce(location, 1000);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [units, setUnits] = useState('metric');
  const [weatherData, setWeatherData] = useState(null);

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

        // Most common error are going to be 404 and 401s, but the default error messages aren't very user friendly.
        // Let's check for these cases & supply something a little nicer.
        let errorMessage;
        const errorStatus = err.response && err.response.status ? err.response.status : -1;
        switch (errorStatus) {
          case 401:
            errorMessage = 'Access to the OpenWeatherMaps API has been denied. Please verify you are using a valid API key and try again.'
          break;

          case 404:
            errorMessage = 'The city you are searching for could not be found. Please double check your spelling and try again.';
          break;
            
          default:
            errorMessage = err.message || 'An unknown error occurred. Please try again later.';  
        }

        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherForecast();
  }, [debouncedLocation, units]);

  return (
    <WeatherificContainer>
      <Header
        location={location}
        setLocation={setLocation}
        units={units}
        setUnits={setUnits}
      />
      {loading && (
        <LoadingContainer>
          <LoadingIndicator size={44} />
        </LoadingContainer>
      )}
      {error && (
        <ErrorContainer>
          <ErrorAlert error={error} />
        </ErrorContainer>
      )}
      {(debouncedLocation.length < 3 || error) && <GetStarted />}
      {!loading && !error && weatherData && (
        <ForecastDetails
          weatherData={weatherData}
          units={units}
        />
      )}
      <FlexFill />
      <Footer />
    </WeatherificContainer>
  );
};

export default Weatherific;

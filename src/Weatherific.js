import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';

import Header from './components/Header';
import LoadingIndicator from './components/LoadingIndicator';
import SearchBar from './components/SearchBar';
import ForecastDetails from './components/ForecastDetails';

const WeatherificContainer = styled.div`
  background-color: white;
`;

const Weatherific = () => {

  const [location, setLocation] = useState('Vancouver');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [units, setUnits] = useState('metric');
  const [weatherData, setWeatherData] = useState(null);

  return <WeatherificContainer>
    <Header />
    {/* {loading && <LoadingIndicator />}
    {error && <span>{error}</span>}
    {!loading && !error && <ForecastDetails weatherData={weatherData} setUnits={setUnits} />} */}
  </WeatherificContainer>;
};

export default Weatherific;

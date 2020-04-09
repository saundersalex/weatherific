import React, {useState, useEffect} from 'react';

const Weatherific = () => {

  const [location, setLocation] = useState('Vancouver');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [units, setUnits] = useState('metric');
  const [weatherData, setWeatherData] = useState(null);
  
  return <>
    <h1>Hello, Weatherific!</h1>
  </>;
};

export default Weatherific;

import axios from 'axios';

const forecastService = () => {

  const openWeatherMapsAPIKey = process.env.REACT_APP_OWM_API_KEY;
  if (!openWeatherMapsAPIKey) {
    console.error('No OpenWeatherMaps API key provided. Requests for Forecast data will not work until you provide the API key.');
  }

  const openWeatherMapsAPI = axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5'
  });

  // Define service methods available through this service to consumers.
  const self = {
    async findForecastByCityNameWithUnits(cityName, units) {
      const {data} = await openWeatherMapsAPI.get('/forecast', {
        params: {
          q: cityName,
          units,
          appid: openWeatherMapsAPIKey
        }
      });
      return data;
    }
  };

  return self;
};

export default forecastService();

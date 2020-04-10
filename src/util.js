import moment from 'moment';

// Helper/Utility Functions

/**
* Convenience helper that returns arrays of weather data keyed by their unique, localized date
* in which they occur; for making rendering daily forecasts simpler within the app.
*/
export function groupWeatherDataByDate(allWeatherData) {
  const weatherDataByDate = {};
  allWeatherData.forEach((weatherData) => {
    if (!weatherData.dt) {
      return;
    }
    const weatherDateKey = moment(weatherData.dt * 1000).format('YYYY-MM-DD');
    if (weatherDataByDate.hasOwnProperty(weatherDateKey)) {
      weatherDataByDate[weatherDateKey].push(weatherData);
    } else {
      weatherDataByDate[weatherDateKey] = [weatherData];
    }
  });
  return weatherDataByDate;
 };

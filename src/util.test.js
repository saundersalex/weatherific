import moment from 'moment';
import {groupWeatherDataByDate} from './util';

test('Should yield localized YYYY-MM-DD keyed dates from OWM API response', () => {
  const sampleAPIResponse = [
    {dt: 1586347200, weather: 'Windy'},
    {dt: 1586347900, weather: 'Sunny'}, // Same day as first item, should be grouped together.
    {dt: 1586433600, weather: 'Snowy'},
    {dt: 1586520000, weather: 'Cloudy'},
  ];

  // Make this test timezone-safe by creating a unique list
  // of expected date strings for the above timestamps.
  const localizedDates = sampleAPIResponse
    .map((weatherData) => moment(weatherData.dt * 1000).format('YYYY-MM-DD'))
    .filter((date, ix, allDates) => allDates.indexOf(date) === ix);
  const expectedResult = {
    [localizedDates[0]]: [
      {dt: 1586347200, weather: 'Windy'},
      {dt: 1586347900, weather: 'Sunny'}
    ],
    [localizedDates[1]]: [
      {dt: 1586433600, weather: 'Snowy'}
    ],
    [localizedDates[2]]: [
      {dt: 1586520000, weather: 'Cloudy'}
    ]
  };
  const actualResult = groupWeatherDataByDate(sampleAPIResponse);
  expect(actualResult).toStrictEqual(expectedResult);
});

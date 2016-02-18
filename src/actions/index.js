import axios from 'axios';

const API_KEY = 'd7b9375834fa8da268df83a7963c3db7';
//es6 template strings to wire in variables
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

//THIS IS TO EXPORT A VARIABLE NAME RATHER THAN JUST SPECIFYING THE STRING EVERYWHERE
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  

  
  return {
    type: FETCH_WEATHER,
    payload: request
  }
  
}
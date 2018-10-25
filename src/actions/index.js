import axios from 'axios';

const API_KEY = '963f998eb4eac7b3711a168b6256eafa';
const ROOT_URL = `https://samples.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`

export const FETCH_WEATHER='FETCH_WEATHER';

export function fetchWeather(city){
  const url =`${ROOT_URL}&q=${city},kr`
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
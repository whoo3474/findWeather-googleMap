const API_KEY = '963f998eb4eac7b3711a168b6256eafa';

export const FETCH_WEATHER='FETCH_WEATHER';

export function fetchWearher(){
  return {
    type: FETCH_WEATHER
  }
}
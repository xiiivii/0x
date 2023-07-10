import axios from 'axios';

export type ApiWeather = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_weather: {
    temperature: number;
    windspeed: number;
    winddirection: number;
    weathercode: number;
    is_day: number;
    time: string;
  };
  hourly_units: {
    time: string;
    temperature_2m: string;
    weathercode: string;
  };
  hourly: {
    time: string[];
    temperature_2m: number[];
    weathercode: number[];
  };
  daily_units: {
    time: string;
    weathercode: string;
    temperature_2m_max: string;
    temperature_2m_min: string;
    precipitation_probability_max: string;
  };
  daily: {
    time: string[];
    weathercode: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    precipitation_probability_max: number[];
  };
};

const url = 'https://api.open-meteo.com/v1/forecast';

export const getWeather = async ({ lat, lon }: { lat: number; lon: number }) => {
  const response = await axios.get<ApiWeather>(url, {
    params: {
      latitude: lat,
      longitude: lon,
      timezone: 'auto',
      forecast_days: 10,
      current_weather: true,
      hourly: ['temperature_2m', 'weathercode'],
      daily: [
        'weathercode',
        'temperature_2m_max',
        'temperature_2m_min',
        'precipitation_probability_max',
      ],
    },
  });

  return response;
};

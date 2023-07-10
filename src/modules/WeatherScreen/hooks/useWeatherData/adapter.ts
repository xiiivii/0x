import { ApiWeather } from '../../api/getWeatherByCoords';
import { WeatherCondition } from '../../types/Weather';
import type { Weather } from '../../types/Weather';

import { checkIfNight } from './helpers/checkIfNight';
import { formatHours } from './helpers/formatHours';
import { formatWeekDay } from './helpers/formatWeekDay';

const adaptCondition = (data: ApiWeather['current_weather']['weathercode']): WeatherCondition => {
  switch (data) {
    case 0:
    case 1:
      return WeatherCondition.Clear;

    case 2:
      return WeatherCondition.PartlyCloudy;

    case 3:
      return WeatherCondition.Cloudy;

    case 45:
    case 48:
      return WeatherCondition.Fog;

    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
      return WeatherCondition.Drizzle;

    case 61:
    case 63:
    case 65:
      return WeatherCondition.Rain;

    case 66:
    case 67:
      return WeatherCondition.FreezingRain;

    case 71:
    case 73:
    case 75:
    case 77:
      return WeatherCondition.Snow;

    case 80:
    case 81:
    case 82:
      return WeatherCondition.RainShowers;

    case 85:
    case 86:
      return WeatherCondition.SnowShowers;

    case 95:
    case 96:
    case 99:
      return WeatherCondition.Thunderstorm;

    default:
      return WeatherCondition.Cloudy;
  }
};

const adaptTemperature = (temperature: number) => Math.round(temperature);

const adaptNowForecast = (data: ApiWeather['current_weather']): Weather['nowForecast'] => {
  return {
    temperature: adaptTemperature(data.temperature),
    condition: adaptCondition(data.weathercode),
  };
};

const adaptHourlyForecast = (data: ApiWeather['hourly']): Weather['hourlyForecast'] => {
  const result: Weather['hourlyForecast'] = [];

  const startHourIndex = new Date().getHours();
  const endHourIndex = startHourIndex + 24; // Take information for one day ahead

  for (let index = startHourIndex; index < endHourIndex; index += 1) {
    const time = data.time[index];
    const temperature = data.temperature_2m[index];
    const condition = data.weathercode[index];

    result.push({
      id: time,

      isNight: checkIfNight(time),

      label: index === startHourIndex ? 'Now' : formatHours(time),

      temperature: adaptTemperature(temperature),
      condition: adaptCondition(condition),
    });
  }

  return result;
};

const adaptDailyForecast = (data: ApiWeather['daily']): Weather['dailyForecast'] => {
  return data.time.map((time, index) => {
    const precipitation = data.precipitation_probability_max[index];
    const minTemperature = data.temperature_2m_min[index];
    const maxTemperature = data.temperature_2m_max[index];
    const condition = data.weathercode[index];

    return {
      id: time,

      label: index === 0 ? 'Today' : formatWeekDay(time),

      precipitation,
      condition: adaptCondition(condition),

      minTemperature: adaptTemperature(minTemperature),
      maxTemperature: adaptTemperature(maxTemperature),
    };
  });
};

const adaptTodayTemperatureRange = (
  data: Weather['dailyForecast']
): Weather['periodTemperatureRange'] => {
  return {
    minTemperature: data[0].minTemperature,
    maxTemperature: data[0].maxTemperature,
  };
};

const adaptPeriodTemperatureRange = (
  data: Weather['dailyForecast']
): Weather['periodTemperatureRange'] => {
  return data.reduce(
    (acc, dayForecast) => {
      const { minTemperature, maxTemperature } = dayForecast;

      acc.minTemperature = Math.min(acc.minTemperature, minTemperature);
      acc.maxTemperature = Math.max(acc.maxTemperature, maxTemperature);

      return acc;
    },
    {
      minTemperature: data[0].minTemperature,
      maxTemperature: data[0].maxTemperature,
    }
  );
};

export const adaptWeather = (data: ApiWeather): Weather => {
  const nowForecast = adaptNowForecast(data.current_weather);

  const hourlyForecast = adaptHourlyForecast(data.hourly);
  const dailyForecast = adaptDailyForecast(data.daily);

  const todayTemperatureRange = adaptTodayTemperatureRange(dailyForecast);
  const periodTemperatureRange = adaptPeriodTemperatureRange(dailyForecast);

  return {
    nowForecast,

    hourlyForecast,
    dailyForecast,

    todayTemperatureRange,
    periodTemperatureRange,
  };
};

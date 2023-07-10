export const enum WeatherCondition {
  Clear = 'Clear',
  PartlyCloudy = 'PartlyCloudy',
  Cloudy = 'Cloudy',
  Fog = 'Fog',
  Drizzle = 'Drizzle',
  Rain = 'Rain',
  FreezingRain = 'FreezingRain',
  Snow = 'Snow',
  RainShowers = 'RainShowers',
  SnowShowers = 'SnowShowers',
  Thunderstorm = 'Thunderstorm',
}

export type Weather = {
  nowForecast: {
    temperature: number;
    condition: WeatherCondition;
  };

  hourlyForecast: {
    id: string;

    isNight: boolean;

    label: string;

    temperature: number;
    condition: WeatherCondition;
  }[];

  dailyForecast: {
    id: string;

    label: string;

    precipitation: number;
    condition: WeatherCondition;

    minTemperature: number;
    maxTemperature: number;
  }[];

  todayTemperatureRange: {
    minTemperature: number;
    maxTemperature: number;
  };

  periodTemperatureRange: {
    minTemperature: number;
    maxTemperature: number;
  };
};

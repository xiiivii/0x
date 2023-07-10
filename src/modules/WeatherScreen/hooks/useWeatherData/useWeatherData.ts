import { useCallback, useEffect, useState } from 'react';

import { getSkeletonAnimationDuration } from 'src/components/Skeleton';

import { getGeolocationCoords } from '../../api/getGeolocationCoords';
import { getLocationByCoords } from '../../api/getLocationByCoords';
import { getLocationWithCoords } from '../../api/getLocationWithCoords';
import { getWeather } from '../../api/getWeatherByCoords';
import type { Weather } from '../../types/Weather';
import { adaptWeather } from './adapter';

const skeletonAnimationDuration = getSkeletonAnimationDuration();
const waitForSkeletonAnimationIteration = () => {
  return new Promise((resolve) => setTimeout(resolve, skeletonAnimationDuration));
};

const fetchLocation = async () => {
  const lang = navigator.language;

  try {
    const { lat, lon } = await getGeolocationCoords();
    const { location } = await getLocationByCoords({ lat, lon, lang });

    return { location, lat, lon };
  } catch {
    const { location, lat, lon } = await getLocationWithCoords({ lang });

    return { location, lat, lon };
  }
};

const fetchLocationAndWeather = async () => {
  const { location, lat, lon } = await fetchLocation();
  const { data } = await getWeather({ lat, lon });

  const weather = adaptWeather(data);

  return { location, weather };
};

const initialState = {
  location: null,
  weather: null,
};

export const useWeatherData = () => {
  const [error, setError] = useState(false);
  const [{ location, weather }, setState] = useState<{
    location: string | null;
    weather: Weather | null;
  }>({
    location: null,
    weather: null,
  });

  const fetch = useCallback(async () => {
    setError(false);
    setState(initialState);

    try {
      const [state] = await Promise.all([
        fetchLocationAndWeather(),
        waitForSkeletonAnimationIteration(),
      ]);

      setState(state);
    } catch {
      setError(true);
    }
  }, []);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { location, weather, error, fetch };
};

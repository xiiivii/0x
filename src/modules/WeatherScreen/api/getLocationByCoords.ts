import axios from 'axios';

const url = 'https://api.bigdatacloud.net/data/reverse-geocode-client';

export const getLocationByCoords = async (params: { lat: number; lon: number; lang?: string }) => {
  const { data } = await axios.get(url, {
    params: {
      latitude: params.lat,
      longitude: params.lon,
      localityLanguage: params.lang,
    },
  });

  return { location: data.city };
};

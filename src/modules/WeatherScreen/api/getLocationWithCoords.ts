import axios from 'axios';

const url = 'https://api.bigdatacloud.net/data/reverse-geocode-client';

export const getLocationWithCoords = async (params: { lang?: string }) => {
  const { data } = await axios.get(url, {
    params: {
      localityLanguage: params.lang,
    },
  });

  return {
    location: data.city,
    lat: data.latitude,
    lon: data.longitude,
  };
};

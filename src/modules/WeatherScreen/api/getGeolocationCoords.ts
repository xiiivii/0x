export const getGeolocationCoords = () => {
  return new Promise<{
    lat: number;
    lon: number;
  }>((resolve, reject) => {
    return navigator.geolocation.getCurrentPosition(
      (event: GeolocationPosition) => {
        resolve({
          lat: event.coords.latitude,
          lon: event.coords.longitude,
        });
      },

      () => {
        reject();
      },

      { enableHighAccuracy: true }
    );
  });
};

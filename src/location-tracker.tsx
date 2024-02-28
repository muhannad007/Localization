import React, { useEffect, useState } from "react";

const LocationTracker: React.FC = () => {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);

  useEffect(() => {
    const successCallback = (position: GeolocationPosition) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      console.log(latitude, longitude);
    };

    const errorCallback = (error: GeolocationPositionError) => {
      console.error(error.message);
    };

    if (navigator.geolocation) {
      const options: PositionOptions = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      };

      navigator.geolocation.watchPosition(
        successCallback,
        errorCallback,
        options
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);
  return (
    <div>
      {latitude && longitude ? (
        <p>
          Your current location: Latitude: {latitude}, Longitude: {longitude}
        </p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default LocationTracker;

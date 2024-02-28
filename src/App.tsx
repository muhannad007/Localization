import * as React from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import MapComponent from "./draw-control";
import LocationTracker from "./location-tracker";

const App: React.FC = () => {
  return (
    <div>
      <MapComponent />
      <LocationTracker />
    </div>
  );
};

export default App;

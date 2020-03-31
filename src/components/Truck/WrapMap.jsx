import Map from "./FoodTruck";
import React from "react";
import "./FoodTruck.css";
import {
  withScriptjs,
  withGoogleMap,
} from "react-google-maps";

const MapWrapped = withScriptjs(withGoogleMap(Map));

const FoodTruck = () => {
  return (
    <div className="login-form-page">
      <div style={{ width: "100vw" }}>
        <MapWrapped
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyC7uYChVm0w8cDKMlGmon0XbJDUiiBBc4g`}
          loadingElement={<div style={{ height: "100%" }} />}
          containerElement={<div style={{ height: "100%" }} />}
          mapElement={<div style={{ height: "100%" }} />}
        />
      </div>
    </div>
  );
};

export default FoodTruck





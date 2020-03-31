import React, { useEffect, useState } from "react";
import "./FoodTruck.css";
// import { useSelector, useDispatch } from "./node_modules/react-redux";
import { fetchTrucks } from "../../redux";
import { connect } from "react-redux";
import {
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";


function Map({ truckData, fetchTrucks }) {

  const [selectedTruck, setSelectedTruck] = useState(false);

  useEffect(() => {
    fetchTrucks();
  }, [selectedTruck]);

  const closeInfoBox = () => {
    setSelectedTruck(false)
  }

  const openInfoBox = truck => {
    setSelectedTruck(truck)
  }
  
  const truckMarkers = truckData.map(truck => {
    return (
      <div>
        <Marker
          key={truck.objectid}
          className="marker-class"
          position={{
            lat: truck.location.coordinates[1],
            lng: truck.location.coordinates[0]
          }}
          onClick={() => {
            openInfoBox(truck);
          }}
        />
      </div>
    );
  });

  return (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: 37.774929, lng: -122.419418 }}
    >
      <div>
        {truckMarkers}
        {selectedTruck && (
          <InfoWindow
            onCloseClick={() => {
              closeInfoBox();
            }}
            position={{
              lat: selectedTruck.location.coordinates[1],
              lng: selectedTruck.location.coordinates[0]
            }}
            // visible={selectedTruck}
          >
            <div>
              <h2>{selectedTruck.applicant}</h2>
              <p>Address: {selectedTruck.address}</p>
              <p className="food-genre">Genre: {selectedTruck.fooditems}</p>
            </div>
          </InfoWindow>
        )}
      </div>
    </GoogleMap>
  );
}

const mapStateToProps = state => {
  return {
    truckData: state.restaurants.trucks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTrucks: () => dispatch(fetchTrucks())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);


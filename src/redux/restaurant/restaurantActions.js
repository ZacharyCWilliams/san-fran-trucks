import axios from "axios";
import {
  FETCH_TRUCKS_REQUEST,
  FETCH_TRUCKS_SUCCESS,
  FETCH_TRUCKS_FAILURE
} from "./restaurantTypes";

export const fetchTrucksRequest = () => {
  return {
    type: FETCH_TRUCKS_REQUEST
  };
};

export const fetchTrucksSuccess = trucks => {
  return {
    type: FETCH_TRUCKS_SUCCESS,
    payload: trucks
  };
};

export const fetchTrucksFailure = error => {
  return {
    type: FETCH_TRUCKS_FAILURE,
    payload: error
  };
};

export const fetchTrucks = () => {
  return dispatch => {
    dispatch(fetchTrucksRequest);
    axios
      .get("https://data.sfgov.org/resource/rqzj-sfat.json")
      .then(response => {
        const trucks = response.data.filter(restaurant => {
            return restaurant.facilitytype === "Truck";
        })
        dispatch(fetchTrucksSuccess(trucks));
      })
      .catch(error => {
        const errorMsg = error.message;
        dispatch(fetchTrucksFailure(errorMsg));
      });
  };
};

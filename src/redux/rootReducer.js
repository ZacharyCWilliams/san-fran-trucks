import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import restaurantReducer from "./restaurant/restaurantReducer";

const rootReducer = combineReducers({
  // restaurant: restaurantReducer,
  user: userReducer,
  restaurants: restaurantReducer
});

export default rootReducer;

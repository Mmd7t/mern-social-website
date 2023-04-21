import { combineReducers } from "redux";
import authReducer from "./auth";
import feedReducer from "./feed";
import globalReducer from "./global";
import profileReducer from "./profile";

export default combineReducers({ authReducer, feedReducer, globalReducer, profileReducer });
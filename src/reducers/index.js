import { combineReducers } from "redux";
import monAn from "./monAn";
import datBan from "./datBan";

export const reducers = combineReducers({
    datBan,
    monAn
})
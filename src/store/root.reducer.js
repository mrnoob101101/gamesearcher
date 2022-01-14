import {combineReducers} from "@reduxjs/toolkit";
import {gamesSlice} from "./main/mainSlice";


export const rootReducer = combineReducers({
    games: gamesSlice.reducer,
});




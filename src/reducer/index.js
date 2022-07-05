import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import React from 'react';
import counterReducer from "./counter";
import loggedReducer from "./loggedReducer";

const allReducer= combineReducers({
    counter: counterReducer,
    isLogged:loggedReducer
})
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import downloadReducer from './downloadItemsSlice';

const rootReducer = combineReducers(
  {
    downloads: downloadReducer
  }
);

const createStore = (preloadedState) => configureStore({
  reducer: rootReducer,
  preloadedState
});

export default createStore;

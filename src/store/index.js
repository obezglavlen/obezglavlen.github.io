import { combineReducers, configureStore } from '@reduxjs/toolkit';
import downloadReducer, { __name } from './downloadItemsSlice';

const rootReducer = combineReducers(
  {
    [__name]: downloadReducer
  }
);

const createStore = (preloadedState) => configureStore({
  reducer: rootReducer,
  preloadedState
});

export default createStore;

import { __name as downloadsName } from './downloadItemsSlice';
import { createSelector } from '@reduxjs/toolkit';

export const selectAllItems = (state) => state[downloadsName].items;

const getCurrent = (state) => state[downloadsName].current;

export const selectCurrentItem = createSelector(
  selectAllItems,
  getCurrent,
  (items, current) => {
    if (!current.key || !current.index) {
      return null;
    }
    return items[current.key][current.index];
  }
);

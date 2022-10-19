import { createSelector } from '@reduxjs/toolkit';

export const selectAllItems = (state) => state.downloads.items;

const getCurrent = (state) => state.downloads.current;

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

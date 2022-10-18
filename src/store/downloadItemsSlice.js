import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: {}, current: { key: null, index: null } };

const downloadSlice = createSlice({
  name: 'downloads',
  initialState,
  reducers: {
    fetchDownloads: (state, { payload }) => {
      state.items = payload;
    },
    setCurrentItem: (state, { payload }) => {
      state.current = { key: payload.key, index: payload.index };
    },
    clearCurrentItem: (state) => {
      state.current = [null, null];
    }
  }
});

export default downloadSlice.reducer;

const { fetchDownloads } = downloadSlice.actions;

const asyncFetch = () => (dispatch) => {
  fetch('/assets/data/downloads-items.json')
    .then(response => response.json())
    .then(data => dispatch(fetchDownloads(data)));
};

export const {
  setCurrentItem,
  clearCurrentItem
} = downloadSlice.actions;

export { asyncFetch as fetchDownloads };

export const __name = downloadSlice.name;

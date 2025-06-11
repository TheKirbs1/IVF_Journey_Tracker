// src/store/scriptsSlice.js
import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  scripts: [], // { id, title, description, body, status }
};

const scriptsSlice = createSlice({
  name: 'scripts',
  initialState,
  reducers: {
    addScript: {
      reducer(state, action) {
        state.scripts.push(action.payload);
      },
      prepare(title = 'Untitled', description = '') {
        return {
          payload: {
            id: nanoid(),
            title,
            description,
            body: '',
            status: 'draft', // other statuses: "editing", "complete", "published"
          },
        };
      },
    },
    updateScript(state, action) {
      const { id, updates } = action.payload;
      const index = state.scripts.findIndex(s => s.id === id);
      if (index !== -1) {
        state.scripts[index] = { ...state.scripts[index], ...updates };
      }
    },
    deleteScript(state, action) {
      state.scripts = state.scripts.filter(s => s.id !== action.payload);
    },
  },
});

export const { addScript, updateScript, deleteScript } = scriptsSlice.actions;
export default scriptsSlice.reducer;

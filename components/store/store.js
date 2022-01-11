import { configureStore, createSlice } from "@reduxjs/toolkit";


const userIntial = {
  userName: "",
  password: "",
  songs: [],
  localSongs:[],
};

const userSlice = createSlice({
  name: "userdls",
  initialState: userIntial,
  reducers: {
    onLogin(state, action) {
      state.userName = action.payload.name;
      state.password = action.payload.password;
    },

    getSongs(state, action) {
      state.songs = action.payload;
    },
    getLocalAudio(state,action){
      state.localSongs=action.payload
    }
  },
});

const store = configureStore({
  reducer: { user: userSlice.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
export const userAction = userSlice.actions;

export default store;

import { configureStore, createSlice } from "@reduxjs/toolkit";
// import myCustomApiService from './api'
const userIntial = {
  userName: "",
  password: "",
  isLogged: false,
  songs: [],
  showSong: false,
};

const userSlice = createSlice({
  name: "userdls",
  initialState: userIntial,
  reducers: {
    onLogin(state, action) {
      state.isLogged = true;
      state.userName = action.payload.name;
      state.password = action.payload.password;
    },
    onLogout(state) {
      state.isLogged = false;
    },
    getSongs(state, action) {
      state.songs = action.payload;
    },
    showSong(state) {
      state.showSong = !state.showSong;
    },
  },
});

const store = configureStore({
  reducer: { user: userSlice.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  })
});
export const userAction = userSlice.actions;

export default store;

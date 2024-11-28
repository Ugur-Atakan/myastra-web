import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import { UserInterface } from '../../types/user';

interface UserState {
  isLoggedIn: boolean;
  userData: UserInterface;
}

const initialState: UserState = {
  isLoggedIn: false,
  userData: {
    id: '',
    name: '',
    email: '',
    notifications: false,
    createdAt: '',
    profileImage: '',
    telephone: '',
    roles: [],
    profilePicture: '',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserInterface>) => {
      state.userData = action.payload;
      state.isLoggedIn = true;
    },
    logOut: state => {
      state.userData = initialState.userData;
      state.isLoggedIn = false;
    },
    updateUser: (state, action: PayloadAction<UserInterface>) => {
      state.userData = action.payload;
    },
  },
});
export const {login, logOut, updateUser} = userSlice.actions;
export const userActions = userSlice.actions;
export default userSlice.reducer;
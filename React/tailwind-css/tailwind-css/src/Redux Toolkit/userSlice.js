import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

var getLoginValue = localStorage.getItem('user_login');
var getLoginValue = getLoginValue ?? 0;

const initialState = {
  isLogin: getLoginValue,
}

export const loginSlice = createSlice({
  name: 'user_login',
  initialState,
  reducers: {
    login: (getState) => {
        getState.isLogin = 1;
        localStorage.setItem('user_login', 1);
        toast.success('Login Succussfull.')
    },
    logout: (getState) => {
        getState.isLogin = 0;
        localStorage.removeItem('user_login');
        toast.success('Logout Succussfull.')
    },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { login, logout } = loginSlice.actions

export default loginSlice.reducer
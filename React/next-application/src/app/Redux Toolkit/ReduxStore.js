import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice'
import loginSlice from './userSlice'

export const reduxStore = configureStore({
  reducer: {
    cart : cartSlice,
    user_login : loginSlice
  },
})
import React from 'react'
import { ToastContainer } from 'react-toastify'
import Header from './Common/Header'
import Footer from './Common/Footer'
import { Outlet } from 'react-router'
import { Provider } from 'react-redux'
import { reduxStore } from '../Redux Toolkit/ReduxStore'

export default function RootLayout() {
  return (
    <>
      <Provider store={ reduxStore }>
        <ToastContainer />

        <Header />

        <Outlet />

        <Footer />
      </Provider>
    </>
  )
}

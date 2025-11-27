import React from 'react'
import { ToastContainer } from 'react-toastify'
import Header from './Common/Header'
import Footer from './Common/Footer'
import { Outlet } from 'react-router'

export default function RootLayout() {
  return (
    <>
      <ToastContainer/>

      <Header/>

      <Outlet/>

      <Footer/>
    </>
  )
}

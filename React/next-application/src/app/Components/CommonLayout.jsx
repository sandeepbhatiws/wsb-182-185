"use client"
import React from 'react'
import Header from './Common/Header'
import Footer from './Common/Footer'
import { Provider } from 'react-redux'
import { reduxStore } from '../Redux Toolkit/ReduxStore'
import { ToastContainer } from 'react-toastify'

export default function CommonLayout({children}) {
  return (
    <>
    <Provider store={ reduxStore }>
        <ToastContainer/>
        <Header/>
            {children}
        <Footer/>
    </Provider>
    </>
  )
}

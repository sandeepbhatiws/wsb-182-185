import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'

export default function Common() {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='basis-[80%] flex-grow-1'>

        <Outlet />

      </div>

    </div>
  )
}

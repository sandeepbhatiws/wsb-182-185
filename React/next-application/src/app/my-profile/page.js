"use client"
import { useRouter, useSelectedLayoutSegments } from 'next/navigation'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function page() {

    const isLogin = useSelector((state) => {
        return state.user_login.isLogin
    })

    const router = useRouter();

    useEffect(() => {
        if(isLogin != 1){
            router.push('/login');
        }
    },[isLogin]);

  return (
    <div>
      My Profile Page
    </div>
  )
}

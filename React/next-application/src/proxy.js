import React from 'react'
import { NextResponse } from 'next/server'

export function proxy(request) {
    let cookies = request.cookies.get('user_login')?.value;

    console.log(cookies)

  if (cookies == 1 && request.nextUrl.pathname.startsWith('/login')) {
    return NextResponse.redirect(new URL('/my-profile', request.url))
  }
 
  if (cookies != 1 && request.nextUrl.pathname.startsWith('/my-profile')) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}
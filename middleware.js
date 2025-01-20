import { NextResponse } from 'next/server'

 
// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  try { 
    const cookie = request.cookies.get('jwt')
    if (!cookie)
    {
      return NextResponse.redirect(new URL('/account/login', request.url), {
        status: 307
      })
    }
    const jwt = cookie.value
    if (!jwt)
      {
        return NextResponse.redirect(new URL('/account/login', request.url), {
          status: 307
        })
      }
    const response = await fetch(`http://localhost:3002/auth/check-token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`
      }
    })
    console.log(response)

    const status = (response.status)
    console.log(status)
    const msg = (await response.json())['msg']

    if (status !== 200 || msg === 'bad-token') {
      return NextResponse.redirect(new URL('/account/login', request.url), {
        status: 307
      })
    }
    
    return NextResponse.next()
} catch (error) {
  console.log(error)
    return NextResponse.redirect(new URL('/account/login', request.url), {
      status: 307
    })
}
 
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/dashboard/:path', '/dashboard', '/dashboard/'],
}
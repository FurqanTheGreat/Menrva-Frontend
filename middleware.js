import { NextResponse } from 'next/server'
import appConfig from 'components/config'
 
// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  const cookie = request.cookies.get('jwt')
  if (!cookie)
  {
    
  }
  const jwt = cookie.value
  const response = await fetch(`${appConfig.backendEndpoint}auth/check-token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`
    }
  })
  const status = (response.status)
  const msg = (await response.json())['msg']

  if (status !== 200 || msg === 'bad-token') {
    return NextResponse.redirect(new URL('/account/login', request.url), {
      status: 307
    })
  }
  
  return NextResponse.next()

}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/dashboard/:path', '/dashboard', '/dashboard/'],
}
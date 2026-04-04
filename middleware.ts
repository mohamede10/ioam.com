import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Autoriser l'accès à la page de login
  if (pathname === '/admin/login') {
    return NextResponse.next();
  }
  
  // Protéger toutes les routes admin
  if (pathname.startsWith('/admin')) {
    const isLoggedIn = request.cookies.get('admin_logged_in')?.value === 'true';
    
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
};
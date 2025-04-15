import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const formData = await request.formData();
  
  // В демо просто перенаправляем на страницу авторизации после любой регистрации
  return NextResponse.redirect(new URL('/login?registered=true', request.url));
} 
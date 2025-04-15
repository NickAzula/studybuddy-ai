import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const formData = await request.formData();
  const username = formData.get('username');
  const password = formData.get('password');

  // Заглушка для демо - принимаем только root/root
  if (username === 'root' && password === 'root') {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // В случае неверной авторизации возвращаем обратно на страницу логина
  return NextResponse.redirect(new URL('/login?error=invalid', request.url));
} 
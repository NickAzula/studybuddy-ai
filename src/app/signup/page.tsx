"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/50 px-4">
      <Card className="w-full max-w-md">
        <CardContent className="pt-6">
          <h1 className="text-2xl font-bold text-center mb-6">Регистрация в StudyBuddy</h1>
          <form action="/api/signup" method="POST" className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full p-2 border rounded"
                placeholder="example@mail.ru"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="username">
                Логин
              </label>
              <input
                id="username"
                name="username"
                type="text"
                className="w-full p-2 border rounded"
                placeholder="username"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="password">
                Пароль
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className="w-full p-2 border rounded"
                placeholder="••••••"
                required
              />
            </div>
            <div className="pt-2">
              <Button type="submit" className="w-full">
                Зарегистрироваться
              </Button>
            </div>
          </form>
          <div className="mt-6 text-center">
            <Link href="/login" className="text-sm text-primary hover:underline">
              Уже есть аккаунт? Войти
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 
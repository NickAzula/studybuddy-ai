"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function ExamPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Пробный экзамен</h1>
      
      <Card className="mb-8">
        <CardContent className="p-6 flex flex-col items-center text-center">
          <h2 className="text-xl font-semibold mb-2">ЕГЭ по математике (профильная)</h2>
          <p className="text-muted-foreground mb-6">Симулятор официального экзамена с тайминграм</p>
          
          <div className="grid grid-cols-2 gap-4 text-sm mb-8 w-full max-w-md">
            <div className="p-3 bg-muted rounded">
              <p className="font-medium">Продолжительность</p>
              <p>3 часа 55 минут</p>
            </div>
            <div className="p-3 bg-muted rounded">
              <p className="font-medium">Заданий</p>
              <p>19 заданий</p>
            </div>
            <div className="p-3 bg-muted rounded">
              <p className="font-medium">Сложность</p>
              <p>Стандартная</p>
            </div>
            <div className="p-3 bg-muted rounded">
              <p className="font-medium">Режим</p>
              <p>Реальный</p>
            </div>
          </div>
          
          <div className="space-y-3 w-full max-w-md">
            <Button className="w-full">Начать экзамен</Button>
            <Link href="/dashboard" className="w-full">
              <Button variant="outline" className="w-full">
                Вернуться на главную
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4">История экзаменов</h2>
          
          <div className="space-y-4">
            <div className="p-4 border rounded flex justify-between items-center">
              <div>
                <p className="font-medium">ЕГЭ по математике (профильная)</p>
                <p className="text-sm text-muted-foreground">12 марта 2025</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold">58/100</p>
                <Button variant="link" className="text-sm p-0 h-auto">Подробнее</Button>
              </div>
            </div>
            <div className="p-4 border rounded flex justify-between items-center">
              <div>
                <p className="font-medium">ЕГЭ по математике (профильная)</p>
                <p className="text-sm text-muted-foreground">25 февраля 2025</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold">52/100</p>
                <Button variant="link" className="text-sm p-0 h-auto">Подробнее</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 
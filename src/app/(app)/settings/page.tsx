"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function SettingsPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Настройки</h1>
      
      <div className="space-y-6">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Профиль</h2>
            
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium block mb-1">Имя</label>
                <input type="text" className="w-full p-2 border rounded" value="Иван Иванов" />
              </div>
              
              <div>
                <label className="text-sm font-medium block mb-1">Email</label>
                <input type="email" className="w-full p-2 border rounded" value="example@mail.ru" />
              </div>
              
              <div className="pt-2">
                <Button>Сохранить</Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Обучение</h2>
            
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium block mb-1">Предмет</label>
                <select className="w-full p-2 border rounded">
                  <option>Математика (профильная)</option>
                  <option>Математика (базовая)</option>
                  <option>Физика</option>
                  <option>Информатика</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm font-medium block mb-1">Уровень подготовки</label>
                <select className="w-full p-2 border rounded">
                  <option>Начинающий</option>
                  <option>Средний</option>
                  <option>Продвинутый</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm font-medium block mb-1">Длительность тренировки</label>
                <select className="w-full p-2 border rounded">
                  <option>12 минут</option>
                  <option>20 минут</option>
                  <option>30 минут</option>
                </select>
              </div>
              
              <div className="pt-2">
                <Button>Применить</Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Подписка</h2>
            
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="font-medium">Free</p>
                <p className="text-sm text-muted-foreground">100 вопросов / месяц</p>
              </div>
              <Button variant="outline">Улучшить</Button>
            </div>
            
            <div className="p-3 bg-muted rounded">
              <p className="text-sm">
                Использовано 37/100 вопросов в этом месяце. Обновление через 14 дней.
              </p>
            </div>
          </CardContent>
        </Card>
        
        <div className="flex justify-end">
          <Button variant="destructive">Выйти из аккаунта</Button>
        </div>
      </div>
    </div>
  );
} 
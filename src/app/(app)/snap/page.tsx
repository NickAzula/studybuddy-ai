"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, RefreshCcw, Check } from "lucide-react";

export default function SnapPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Фото‑задача</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        {/* Camera Preview / Photo Upload */}
        <Card className="md:col-span-2">
          <CardContent className="p-6">
            <div className="flex flex-col items-center">
              <div className="w-full aspect-video bg-muted rounded-lg mb-4 flex flex-col items-center justify-center">
                <Camera className="h-12 w-12 text-muted-foreground mb-2" />
                <p className="text-muted-foreground">
                  Сфотографируйте задачу или загрузите изображение
                </p>
              </div>
              
              <div className="flex gap-3">
                <Button variant="outline" className="flex items-center gap-2">
                  <RefreshCcw className="h-4 w-4" />
                  <span>Переснять</span>
                </Button>
                <Button className="flex items-center gap-2">
                  <Check className="h-4 w-4" />
                  <span>Использовать фото</span>
                </Button>
              </div>
              
              <div className="w-full mt-4">
                <div className="relative">
                  <input
                    type="file"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    accept="image/*"
                  />
                  <Button variant="outline" className="w-full">
                    Загрузить изображение
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Solution Panel */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Решение</h2>
            <div className="p-4 bg-muted rounded">
              <p className="text-muted-foreground italic text-center">
                После анализа фотографии здесь появится решение в формате LaTeX.
              </p>
            </div>
            
            <div className="mt-6">
              <div className="flex justify-between mb-2">
                <p className="font-medium">Шаги решения</p>
                <p className="text-sm text-muted-foreground">0/3 шагов</p>
              </div>
              <div className="w-full bg-muted rounded-full h-3">
                <div className="bg-primary h-3 rounded-full" style={{ width: "0%" }}></div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Chat Panel */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Вопросы</h2>
            <div className="space-y-4 mb-4 h-[300px] overflow-y-auto p-2">
              <div className="p-3 bg-muted rounded">
                <p className="text-sm">
                  Загрузите фотографию задачи, чтобы начать чат с ИИ-репетитором.
                </p>
              </div>
            </div>
            
            <div className="flex gap-2">
              <input
                type="text"
                className="flex-1 p-2 border rounded"
                placeholder="Задайте вопрос..."
                disabled
              />
              <Button disabled>Отправить</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 
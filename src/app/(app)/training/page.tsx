"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const trainingTasks = [
  {
    id: 1,
    question: "Найдите корни уравнения log₃(x + 4) = 2.",
    answer: "5",
    explanation: "log₃(x + 4) = 2 означает, что 3² = x + 4, следовательно 9 = x + 4, x = 5."
  },
  {
    id: 2,
    question: "Вычислите производную функции f(x) = 3x² + 5x - 2.",
    answer: "6x + 5",
    explanation: "Применяем правила дифференцирования: f'(x) = 6x + 5"
  },
  {
    id: 3,
    question: "В треугольнике ABC угол C равен 90°, AC = 4, BC = 3. Найдите AB.",
    answer: "5",
    explanation: "Используем теорему Пифагора: AB² = AC² + BC² = 4² + 3² = 16 + 9 = 25, следовательно AB = 5."
  },
  {
    id: 4,
    question: "Решите неравенство: log₂(x² - 5x + 6) > 0.",
    answer: "x < 2 или x > 3",
    explanation: "log₂(x² - 5x + 6) > 0 означает, что x² - 5x + 6 > 1, т.е. x² - 5x + 5 > 0. Решаем неравенство: (x-2)(x-3) > 0. Отсюда получаем: x < 2 или x > 3."
  },
  {
    id: 5,
    question: "Найдите значение выражения log₃(27)/log₃(9).",
    answer: "1,5",
    explanation: "log₃(27)/log₃(9) = log₃(3³)/log₃(3²) = 3/2 = 1,5"
  },
  {
    id: 6,
    question: "Найдите площадь треугольника с вершинами в точках A(0,0), B(4,0), C(0,3).",
    answer: "6",
    explanation: "Используем формулу площади треугольника: S = 1/2 * a * h, где a = 4 (основание), h = 3 (высота). Получаем: S = 1/2 * 4 * 3 = 6."
  },
  {
    id: 7,
    question: "Решите уравнение: 2ˣ = 8.",
    answer: "3",
    explanation: "2ˣ = 8 = 2³, следовательно x = 3."
  },
  {
    id: 8,
    question: "Найдите значение выражения sin(π/6) + cos(π/3).",
    answer: "1",
    explanation: "sin(π/6) = 1/2, cos(π/3) = 1/2. Итого: 1/2 + 1/2 = 1."
  }
];

export default function TrainingPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Тренировка дня</h1>
        <Button variant="outline">Сохранить и выйти</Button>
      </div>
      
      <Card className="mb-8">
        <CardContent className="pt-6">
          <div className="flex justify-between mb-2">
            <p className="font-medium">Прогресс</p>
            <p className="text-sm text-muted-foreground">3/8 задач</p>
          </div>
          <div className="w-full bg-muted rounded-full h-3">
            <div className="bg-primary h-3 rounded-full" style={{ width: "37.5%" }}></div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Задача 4</h2>
              <p className="text-lg mb-6">{trainingTasks[3].question}</p>
              
              <div className="mb-6">
                <label className="text-sm font-medium mb-2 block">Ваш ответ:</label>
                <input 
                  type="text" 
                  className="w-full p-2 border rounded-md"
                  placeholder="Введите ответ..." 
                />
              </div>
              
              <Button className="w-full">Проверить</Button>
            </div>
            
            <div className="pt-4 border-t">
              <details className="cursor-pointer">
                <summary className="text-primary font-medium">Нужна подсказка?</summary>
                <div className="mt-2 p-3 bg-muted rounded">
                  <p>Преобразуйте логарифмическое неравенство в квадратное и решите его.</p>
                </div>
              </details>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 
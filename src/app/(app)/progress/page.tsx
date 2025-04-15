"use client";

import { Card, CardContent } from "@/components/ui/card";

const subjects = [
  {
    name: "Алгебра",
    progress: 65,
    topics: [
      { name: "Уравнения", progress: 80 },
      { name: "Неравенства", progress: 75 },
      { name: "Логарифмы", progress: 60 },
      { name: "Производные", progress: 45 },
    ]
  },
  {
    name: "Геометрия",
    progress: 42,
    topics: [
      { name: "Планиметрия", progress: 55 },
      { name: "Стереометрия", progress: 30 },
      { name: "Векторы", progress: 40 },
    ]
  },
  {
    name: "Теория вероятностей",
    progress: 25,
    topics: [
      { name: "Комбинаторика", progress: 35 },
      { name: "Вероятности событий", progress: 20 },
      { name: "Статистика", progress: 20 },
    ]
  },
];

export default function ProgressPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Прогресс обучения</h1>
      
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex justify-between mb-4">
            <div>
              <h2 className="text-xl font-semibold">Общий прогресс ЕГЭ</h2>
              <p className="text-muted-foreground">Оценка знаний по всем разделам</p>
            </div>
            <div className="text-right">
              <p className="text-4xl font-bold">48%</p>
              <p className="text-sm text-muted-foreground">+5% за последний месяц</p>
            </div>
          </div>
          
          <div className="w-full bg-muted rounded-full h-4">
            <div className="bg-primary h-4 rounded-full" style={{ width: "48%" }}></div>
          </div>
        </CardContent>
      </Card>
      
      <div className="space-y-6">
        {subjects.map((subject) => (
          <Card key={subject.name}>
            <CardContent className="p-6">
              <div className="flex justify-between mb-4">
                <h3 className="text-lg font-semibold">{subject.name}</h3>
                <p className="font-medium">{subject.progress}%</p>
              </div>
              
              <div className="w-full bg-muted rounded-full h-3 mb-6">
                <div 
                  className="bg-primary h-3 rounded-full" 
                  style={{ width: `${subject.progress}%` }}
                ></div>
              </div>
              
              <div className="space-y-4">
                {subject.topics.map((topic) => (
                  <div key={topic.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{topic.name}</span>
                      <span>{topic.progress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary/70 h-2 rounded-full" 
                        style={{ width: `${topic.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 
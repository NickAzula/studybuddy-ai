import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="grid gap-6 max-w-4xl mx-auto">
      <Card>
        <CardContent className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Текущий прогноз</p>
            <p className="text-4xl font-bold">62/100</p>
          </div>
          <Link href="/app/exam">
            <Button size="lg">Сдать пробный экзамен</Button>
          </Link>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6 flex flex-col gap-4">
          <h2 className="text-xl font-semibold">План на сегодня</h2>
          <div className="flex gap-2 flex-wrap">
            {["Логарифмы", "Производная", "Геометрия"].map((topic) => (
              <span key={topic} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                {topic}
              </span>
            ))}
          </div>
          <Link href="/app/training">
            <Button size="lg" className="mt-4 self-start">
              Начать 12‑мин сессию
            </Button>
          </Link>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4">Достижения</h2>
          <ul className="space-y-2 text-sm">
            <li>🔥 Закрыл тему «Квадратные уравнения»</li>
            <li>📈 +3 балла к прогнозу после симулятора</li>
            <li>🔥 5‑дневный streak!</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

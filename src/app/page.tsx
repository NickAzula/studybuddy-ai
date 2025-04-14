import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="flex flex-col items-center px-4">
      <section className="flex flex-col items-center text-center max-w-3xl pt-24 pb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Репетитор‑ИИ, который повышает баллы по&nbsp;ЕГЭ
        </h1>
        <p className="text-lg md:text-xl mb-8 text-muted-foreground">
          Фото задачи → пошаговое объяснение за&nbsp;30 секунд. Попробуй бесплатно прямо сейчас.
        </p>
        <div className="flex gap-4">
          <Link href="/signup">
            <Button size="lg">Попробовать бесплатно</Button>
          </Link>
          <Link href="#how">
            <Button variant="outline" size="lg">
              Как это работает
            </Button>
          </Link>
        </div>
        <div className="w-full mt-12 aspect-video rounded-2xl bg-muted shadow-xl" />
      </section>
      <section className="flex flex-wrap justify-center gap-6 pb-16 opacity-75">
        {["school1.svg", "school2.svg", "school3.svg", "forbes.svg"].map((logo) => (
          <img key={logo} src={"/logos/" + logo} alt="logo" className="h-8" />
        ))}
      </section>
      <section id="how" className="max-w-4xl pb-24 grid md:grid-cols-3 gap-8">
        {[
          { title: "Наведи камеру", text: "Сфотографируй задачу или загрузи скрин." },
          { title: "Пойми решение", text: "ИИ покажет каждый шаг и объяснит голосом." },
          { title: "Следуй плану", text: "Ежедневные 12‑мин сессии под твой уровень." }
        ].map((f) => (
          <Card key={f.title} className="text-center">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.text}</p>
            </CardContent>
          </Card>
        ))}
      </section>
      <section id="pricing" className="pb-32 w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-10">Тарифы</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-primary">
            <CardContent className="p-8 flex flex-col items-center gap-4">
              <h3 className="text-2xl font-semibold">Free</h3>
              <p className="text-muted-foreground">100 вопросов / месяц</p>
              <span className="text-4xl font-bold">₽0</span>
              <Link href="/signup">
                <Button size="lg">Начать</Button>
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-8 flex flex-col items-center gap-4">
              <h3 className="text-2xl font-semibold">Premium</h3>
              <p className="text-muted-foreground">Неограниченные вопросы, голос‑чат, экзамен‑симулятор</p>
              <span className="text-4xl font-bold">₽499/мес</span>
              <Link href="/signup?plan=premium">
                <Button size="lg">Попробовать 7 дней</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
      <footer className="w-full border-t py-8 text-sm text-muted-foreground flex flex-col items-center gap-2">
        <p>© 2025 StudyBuddy RU</p>
        <Link href="/privacy" className="underline">Политика конфиденциальности</Link>
      </footer>
    </main>
  );
}

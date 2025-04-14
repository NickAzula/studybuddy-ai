import Link from "next/link";
import { Flame, Camera, BarChart3, PlayCircle, Settings } from "lucide-react";

const links = [
  { href: "/app/dashboard", label: "Домой", icon: Flame },
  { href: "/app/training", label: "Тренировка дня", icon: PlayCircle },
  { href: "/app/snap", label: "Фото‑задача", icon: Camera },
  { href: "/app/progress", label: "Прогресс", icon: BarChart3 },
  { href: "/app/settings", label: "Настройки", icon: Settings },
];

export function Sidebar() {
  return (
    <aside className="w-64 bg-background border-r hidden md:flex flex-col">
      <div className="h-16 flex items-center justify-center text-2xl font-bold border-b">
        SB
      </div>
      <nav className="flex-1 py-4">
        {links.map(({ href, label, icon: Icon }) => (
          <Link key={href} href={href} className="flex items-center gap-3 px-6 py-3 hover:bg-muted transition">
            <Icon className="h-5 w-5" />
            <span>{label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}

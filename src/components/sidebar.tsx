"use client";

import Link from "next/link";
import { Flame, Camera, BarChart3, PlayCircle, Settings } from "lucide-react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/dashboard", label: "Домой", icon: Flame },
  { href: "/training", label: "Тренировка дня", icon: PlayCircle },
  { href: "/snap", label: "Фото‑задача", icon: Camera },
  { href: "/progress", label: "Прогресс", icon: BarChart3 },
  { href: "/settings", label: "Настройки", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-background border-r hidden md:flex flex-col">
      <div className="h-16 flex items-center justify-center text-2xl font-bold border-b">
        SB
      </div>
      <nav className="flex-1 py-4">
        {links.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link 
              key={href} 
              href={href} 
              className={`flex items-center gap-3 px-6 py-3 transition ${
                isActive ? "bg-muted font-medium" : "hover:bg-muted"
              }`}
            >
              <Icon className={`h-5 w-5 ${isActive ? "text-primary" : ""}`} />
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

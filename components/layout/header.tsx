export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <div className="text-xl font-bold text-slate-900">
          🐬 Flipper World
        </div>

        <nav className="flex items-center gap-8 text-sm font-medium text-slate-700">
          <a className="transition hover:text-teal-600" href="/">
            Главная
          </a>

          <a className="transition hover:text-teal-600" href="/encyclopedia">
            Энциклопедия
          </a>

          <a className="transition hover:text-teal-600" href="/courses">
            Курсы
          </a>

          <a className="transition hover:text-teal-600" href="/about">
            О проекте
          </a>
        </nav>
      </div>
    </header>
  );
}
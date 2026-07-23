import { articles } from "@/data/articles";
const featuredArticle = articles[0];
export default function Hero() {
  return (
    <section className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">
        Flipper World
      </p>

      <h1 className="mb-6 text-5xl font-bold">
        Изучай. Понимай. Создавай.
      </h1>

      <p className="mb-10 max-w-2xl text-lg text-gray-600">
        Интерактивная образовательная платформа по Flipper Zero.
        Изучайте прошивки, приложения, протоколы и реальные сценарии
        использования шаг за шагом.
      </p>

      <div className="flex gap-4">
        <button className="rounded-xl bg-black px-6 py-3 text-white transition hover:opacity-90">
          Начать обучение
        </button>

        <button className="rounded-xl border border-gray-300 px-6 py-3 transition hover:bg-gray-100">
          Энциклопедия
        </button>
<div className="mt-16 w-full max-w-2xl rounded-xl border border-gray-200 p-6 text-left">
  <h2 className="mb-2 text-2xl font-bold">
    Первая тема энциклопедии
  </h2>

  <h3 className="text-xl font-semibold">
    {featuredArticle.title}
  </h3>

<p className="mt-2 text-gray-600">
  {featuredArticle.title}
</p>

<p className="mt-4">
  <strong>Категория:</strong> {featuredArticle.category}
</p>

<p>
  <strong>Уровень:</strong> {featuredArticle.difficulty}
</p>

<p>
  <strong>Время чтения:</strong> {featuredArticle.readingTime} минут
</p>
</div>
      </div>
    </section>
  );
}
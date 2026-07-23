import { articles } from "@/data/articles";

export default function EncyclopediaPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="mb-8 text-4xl font-bold">
        Энциклопедия Flipper World
      </h1>

      <div className="grid gap-6">
        {articles.map((article) => (
          <article
            key={article.id}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-2xl font-semibold">
              {article.title}
            </h2>

            <p className="mt-2 text-slate-600">
              {article.shortDescription}
            </p>

            <div className="mt-4 flex gap-6 text-sm text-slate-500">
              <span>{article.category}</span>
              <span>{article.difficulty}</span>
              <span>{article.readingTime} мин</span>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
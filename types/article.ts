export interface Article {
  id: string;

  title: string;

  shortDescription: string;

  fullDescription: string;

  category: string;

  difficulty: "Новичок" | "Средний" | "Продвинутый";

  readingTime: number;

  tags: string[];

  lastUpdated: string;
}
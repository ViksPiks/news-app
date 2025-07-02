import { createNewsItem } from "./create-news-item";

export const createNewsList = (articles) => {
  const ul = document.getElementById("news");
  const cards = articles.map((article) => createNewsItem(article));
  ul.append(...cards);
};

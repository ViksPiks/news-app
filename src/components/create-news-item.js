export const createNewsItem = (article) => {
  const card = document.createElement("li");
  card.classList.add("card");

  const img = document.createElement("img");
  img.setAttribute("src", article.urlToImage);
  img.setAttribute("alt", `${article.title} article photo`);
  img.classList.add("card-img-top", "card-article-photo");
  card.append(img);

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body", "d-flex", "flex-column", "gap-3");
  card.append(cardBody);

  const heading = document.createElement("h5");
  heading.classList.add("card-title");
  heading.textContent = article.title;
  cardBody.append(heading);

  const readMoreLink = document.createElement("a");
  readMoreLink.setAttribute("href", article.url);
  readMoreLink.setAttribute("target", "_blank");
  readMoreLink.classList.add("mt-auto", "link-secondary");
  readMoreLink.textContent = "Read more...";
  cardBody.append(readMoreLink);

  return card;
};

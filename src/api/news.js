const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = `https://newsapi.org/v2`;

const getNews = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch news: ${response.status}`);
    }
    const responseData = await response.json();
    return responseData.articles;
  } catch (err) {
    throw new Error(`Failed to fetch news: ${err.message}`);
  }
};

export const getTopHeadlines = async (countryCode = "us", query) => {
  const url = new URL(
    `${API_URL}/top-headlines?apiKey=${API_KEY}&country=${countryCode}`
  );
  if (query) {
    url.searchParams.append("q", query);
  }
  return getNews(url);
};

import { getTopHeadlines } from "./api/news";
import "./style.css";
import { countries } from "./constants/countries";
import { createNewsList } from "./components/create-news-list";
import { showAlert } from "./components/show-alert";

getTopHeadlines()
.then((articles) => {
  createNewsList(articles);
})
  .catch((err) => {
    showAlert(err);
});

const addOptionsToSelect = (countriesList) => {
  const select = document.querySelector("select#country");

  countriesList.forEach((country) => {
    const option = document.createElement("option");
    option.value = country.code;
    option.textContent = country.name;
    select.appendChild(option);
  });
};

addOptionsToSelect(countries);

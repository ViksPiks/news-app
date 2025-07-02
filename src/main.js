import "./style.css";
import { countries } from "./constants/countries";

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

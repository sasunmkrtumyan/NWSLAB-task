import axios from "axios";

export async function fetchCategoriesFunction() {
  return await axios.get("https://api.thecatapi.com/v1/categories");
}

import axios from "axios";

export async function fetchCatsFunction({ id, limit }) {
  return await axios.get(
    `https://api.thecatapi.com/v1/images/search?limit=${limit}&page=1&category_ids=${id}`
  );
}

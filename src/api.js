import axios from "axios";

export const fetchGallery = async (query, page, perPage) => {
  const ACCESS_KEY = "YO0oFhNvplC4sl7N3Pa8pf848llRegoBTF7H1PWp5pM";
  const response = await axios.get(
    `https://api.unsplash.com/search/photos/?client_id=${ACCESS_KEY}&query=${query}&page=${page}&per_page=${perPage}`
  );
  return response.data;
};

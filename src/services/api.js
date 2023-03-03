import axios from 'axios';

const baseURL = 'https://pixabay.com/api/';
const API_KEY = '33117215-47f2ddcc93bc6218688d9ed56';

export async function requestImages(query, page) {
  const searchParams = {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 12,
      page: page,
    },
  };
  const response = await axios.get(baseURL, searchParams);
  return response.data;
}

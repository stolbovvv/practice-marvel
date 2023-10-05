import axios from 'axios';
import { transformCharatersData, transformComicsData } from '../utilites';

const API_URL = 'https://gateway.marvel.com:443/v1/public';
const API_KEY = 'e3d5971519104048e242dfe93fbb9ab0';

async function getMarvelServiceData(endpoint, params) {
  try {
    const response = await axios.get(`${API_URL}/${endpoint}`, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      params: {
        apikey: API_KEY,
        ...params,
      },
    });

    return response.data;
  } catch (error) {
    console.error('An error occurred while executing the request:', error);
    throw error;
  }
}

export const apiMarvelService = {
  getAllCharacters: async ({ limit = 9, offset = 0 }) => {
    const { data } = await getMarvelServiceData(`/characters`, { limit, offset });

    return data.results.map(transformCharatersData);
  },

  getSingleCharacter: async ({ id }) => {
    const { data } = await getMarvelServiceData(`/characters/${id}`);

    return data.results.map(transformCharatersData);
  },

  getAllComics: async ({ limit = 12, offset = 0 }) => {
    const { data } = await getMarvelServiceData(`/comics`, { limit, offset });

    return data.results.map(transformComicsData);
  },

  getSingleComic: async ({ id }) => {
    const { data } = await getMarvelServiceData(`/comics/${id}`);

    return data.results.map(transformComicsData);
  },
};

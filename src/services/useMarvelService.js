import { useHttp } from '../hooks/useHttp';
import { transformCharatersData, transformComicsData } from '../utilites';

export function useMarvelService() {
  const { error, loading, request } = useHttp();

  const API_URL = 'https://gateway.marvel.com:443/v1/public';
  const API_KEY = 'e3d5971519104048e242dfe93fbb9ab0';

  const get = {
    characters: async ({ limit = 9, offset = 0 }) => {
      const { data } = await request(`${API_URL}/characters?limit=${limit}&offset=${offset}&apikey=${API_KEY}`);
      return data.results.map(transformCharatersData);
    },

    character: async ({ id }) => {
      try {
        const { data } = await request(`${API_URL}/characters/${id}?apikey=${API_KEY}`);
        return transformCharatersData(data.results[0]);
      } catch (error) {
        console.error('Ошибка при загрузке персонажа:', error);
        throw error;
      }
    },

    comics: async ({ limit = 12, offset = 0 }) => {
      const { data } = await request(`${API_URL}/comics?limit=${limit}&offset=${offset}&apikey=${API_KEY}`);
      return data.results.map(transformComicsData);
    },

    comic: async ({ id }) => {
      const { data } = await request(`${API_URL}/comics/${id}?apikey=${API_KEY}`);
      return transformComicsData(data.results[0]);
    },
  };

  return { get, error, loading };
}

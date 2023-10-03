import { useHttp } from '../hooks/useHttp';
import { transformCharatersData, transformComicsData } from '../utilites';

export function useMarvelService() {
  const { error, loading, requset } = useHttp();

  const API_URL = 'https://gateway.marvel.com:443/v1/public';
  const API_KEY = 'e3d5971519104048e242dfe93fbb9ab0';

  const get = {
    characters: async ({ limin = 9, offset = 0 }) => {
      const { data } = await requset(`${API_URL}/characters?limit=${limin}&offset=${offset}&apikey=${API_KEY}`);
      return data.results.map(transformCharatersData);
    },

    character: async ({ id }) => {
      const { data } = await requset(`${API_URL}/characters/${id}?apikey=${API_KEY}`);
      return transformCharatersData(data.results[0]);
    },

    comics: async ({ limin = 12, offset = 0 }) => {
      const { data } = await requset(`${API_URL}/comics?limit=${limin}&offset=${offset}&apikey=${API_KEY}`);
      return data.results.map(transformComicsData);
    },

    comic: async ({ id }) => {
      const { data } = await requset(`${API_URL}/comics/${id}?apikey=${API_KEY}`);
      return transformCharatersData(data.results[0]);
    },
  };

  return { get, error, loading };
}

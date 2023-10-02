import { useFetch } from '../hooks/useFetch';

function useMarvelService() {
  const { fetchData, loading, error } = useFetch();

  const _key = 'e3d5971519104048e242dfe93fbb9ab0';
  const _host = 'https://gateway.marvel.com:443/v1/public';

  const _transformCharacter = (data) => {
    return {
      id: data.id,
      img: `${data.thumbnail.path}.${data.thumbnail.extension}`,
      name: data.name,
      text: data.description.length ? data.description : 'Character description ont found...',
      home: data.urls[0].url,
      wiki: data.urls[1].url,
      comics: data.comics.items,
    };
  };

  const _transformComic = (data) => {
    return {
      id: data.id,
      img: `${data.thumbnail.path}.${data.thumbnail.extension}`,
      name: data.name,
      text: data.description.length ? data.description : 'Character description ont found...',
      home: data.urls[0].url,
      wiki: data.urls[1].url,
      comics: data.comics.items,
    };
  };

  const getCharacters = async ({ limit = 9, offset = 0 } = {}) => {
    const response = await fetchData(`${_host}/characters?limit=${limit}&offset=${offset}&apikey=${_key}`);

    return response.data.results.map(_transformCharacter);
  };

  const getCharacter = async (id) => {
    const response = await fetchData(`${_host}/characters/${id}?&apikey=${_key}`);

    return _transformCharacter(response.data.results[0]);
  };

  const getComics = async ({ limit = 12, offset = 0 } = {}) => {
    const response = await fetchData(`${_host}/comics?limit=${limit}&offset=${offset}&apikey=${_key}`);

    return response.data.results.map(_transformComic);
  };

  const getComic = async (id) => {
    const response = await fetchData(`${_host}/comics/${id}?&apikey=${_key}`);

    return _transformComic(response.data.results[0]);
  };

  return {
    loading,
    error,
    get: {
      characters: getCharacters,
      character: getCharacter,
      comics: getComics,
      comic: getComic,
    },
  };
}

export { useMarvelService };

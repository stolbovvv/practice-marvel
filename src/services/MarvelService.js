class MarvelService {
  constructor() {
    this._key = 'e3d5971519104048e242dfe93fbb9ab0';
    this._host = 'https://gateway.marvel.com:443/v1/public';
  }

  _transformCharacter(data) {
    return {
      id: data.id,
      img: `${data.thumbnail.path}.${data.thumbnail.extension}`,
      name: data.name,
      text: data.description.length ? data.description : 'Character description ont found...',
      home: data.urls[0].url,
      wiki: data.urls[1].url,
      comics: data.comics.items,
    };
  }

  async getData(url) {
    try {
      const response = await fetch(url);

      if (!response) {
        throw new Error(`Could not frtch ${url}, status: ${response.status}`);
      } else {
        return await response.json();
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  async getCharacters({ limit = 9, offset = 0 } = {}) {
    const response = await this.getData(`${this._host}/characters?limit=${limit}&offset=${offset}&apikey=${this._key}`);

    return response.data.results.map(this._transformCharacter);
  }

  async getCharacter(id) {
    const response = await this.getData(`${this._host}/characters/${id}?&apikey=${this._key}`);

    return this._transformCharacter(response.data.results[0]);
  }
}

export { MarvelService };

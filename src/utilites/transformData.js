export function transformCharatersData(data) {
  return {
    id: data.id,
    name: data.name,
    image: data.thumbnail.path + '.' + data.thumbnail.extension,
    comics: data.comics.items,
    description: data.description,
    home: data.urls[0].url,
    wiki: data.urls[1].url,
  };
}

export function transformComicsData(data) {
  return {
    id: data.id,
    title: data.title,
    image: data.thumbnail.path + '.' + data.thumbnail.extension,
    prices: data.prices.price,
    pageCount: data.pageCount,
    description: data.description,
  };
}

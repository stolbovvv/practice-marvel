export function transformCharatersData(data) {
  return {
    id: data.id,
    name: data.name,
    descr: data.description,
    image: data.thumbnail.path + '.' + data.thumbnail.extension,
    comics: data.comics.items,
    home: data.urls[0].url,
    wiki: data.urls[1].url,
  };
}

export function transformComicsData(data) {
  return {
    id: data.id,
    descr: data.description,
    title: data.title,
    image: data.thumbnail.path + '.' + data.thumbnail.extension,
    prices: data.prices.price,
    pageCount: data.pageCount,
  };
}

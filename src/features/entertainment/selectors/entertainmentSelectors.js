function normalizeSearch(search) {
  return search.trim().toLowerCase();
}

export function filterBySearch(items, search) {
  const normalizedSearch = normalizeSearch(search);

  if (!normalizedSearch) {
    return items;
  }

  return items.filter((item) =>
    item.title.toLowerCase().includes(normalizedSearch),
  );
}

export function selectTrending(items) {
  return items.filter((item) => item.isTrending);
}

export function selectMovies(items) {
  return items.filter((item) => item.category === 'Movie');
}

export function selectTVSeries(items) {
  return items.filter((item) => item.category === 'TV Series');
}

export function selectBookmarkedMovies(items) {
  return items.filter((item) => item.category === 'Movie' && item.isBookmarked);
}

export function selectBookmarkedTVSeries(items) {
  return items.filter(
    (item) => item.category === 'TV Series' && item.isBookmarked,
  );
}

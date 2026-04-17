import type { EntertainmentShow } from '../../../types/models';

function normalizeSearch(search: string): string {
  return search.trim().toLowerCase();
}

export function filterBySearch(
  items: EntertainmentShow[],
  search: string,
): EntertainmentShow[] {
  const normalizedSearch = normalizeSearch(search);

  if (!normalizedSearch) {
    return items;
  }

  return items.filter((item) =>
    item.title.toLowerCase().includes(normalizedSearch),
  );
}

export function selectTrending(
  items: EntertainmentShow[],
): EntertainmentShow[] {
  return items.filter((item) => item.isTrending);
}

export function selectMovies(items: EntertainmentShow[]): EntertainmentShow[] {
  return items.filter((item) => item.category === 'Movie');
}

export function selectTVSeries(
  items: EntertainmentShow[],
): EntertainmentShow[] {
  return items.filter((item) => item.category === 'TV Series');
}

export function selectBookmarkedMovies(
  items: EntertainmentShow[],
): EntertainmentShow[] {
  return items.filter((item) => item.category === 'Movie' && item.isBookmarked);
}

export function selectBookmarkedTVSeries(
  items: EntertainmentShow[],
): EntertainmentShow[] {
  return items.filter(
    (item) => item.category === 'TV Series' && item.isBookmarked,
  );
}

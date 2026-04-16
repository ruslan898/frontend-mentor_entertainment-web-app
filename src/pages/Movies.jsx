import { useEntertainmentContext } from '../components/hooks/useEntertainmentContext';
import ContentSection from '../components/ui/contentSection/ContentSection';
import SearchResults from '../components/layout/searchResults/SearchResults';
import {
  filterBySearch,
  selectMovies,
} from '../features/entertainment/selectors/entertainmentSelectors';

export default function Movies() {
  const { data, toggleBookmarked, search } = useEntertainmentContext();

  const movies = selectMovies(data);
  const searchFiltered = filterBySearch(movies, search);

  return search.length < 1 ? (
    <ContentSection
      title="Movies"
      items={movies}
      onBookmarkedChange={toggleBookmarked}
    />
  ) : (
    <SearchResults
      searchFiltered={searchFiltered}
      search={search}
      onBookmarkedChange={toggleBookmarked}
    />
  );
}

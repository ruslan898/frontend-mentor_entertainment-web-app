import { useEntertainmentContext } from '../components/hooks/useEntertainmentContext';
import ContentSection from '../components/ui/contentSection/ContentSection';
import SearchResults from '../components/layout/searchResults/SearchResults';
import {
  filterBySearch,
  selectBookmarkedMovies,
  selectBookmarkedTVSeries,
} from '../features/entertainment/selectors/entertainmentSelectors';

export default function Bookmarked() {
  const { data, toggleBookmarked, search } = useEntertainmentContext();

  const bookmarkedMovies = selectBookmarkedMovies(data);
  const bookmarkedTVSeries = selectBookmarkedTVSeries(data);
  const bookmarkedContent = [...bookmarkedMovies, ...bookmarkedTVSeries];
  const searchFiltered = filterBySearch(bookmarkedContent, search);

  return search.length < 1 ? (
    <>
      {bookmarkedMovies.length > 0 && (
        <ContentSection
          title="Bookmarked Movies"
          items={bookmarkedMovies}
          variant="default"
          onBookmarkedChange={toggleBookmarked}
        />
      )}

      {bookmarkedTVSeries.length > 0 && (
        <ContentSection
          title="Bookmarked TV Series"
          items={bookmarkedTVSeries}
          variant="default"
          onBookmarkedChange={toggleBookmarked}
        />
      )}

      {bookmarkedTVSeries.length === 0 && bookmarkedMovies.length === 0 && (
        <h2 className="empty-placeholder">No bookmarked shows</h2>
      )}
    </>
  ) : (
    <SearchResults
      searchFiltered={searchFiltered}
      search={search}
      onBookmarkedChange={toggleBookmarked}
    />
  );
}

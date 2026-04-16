import { useEntertainmentContext } from '../components/hooks/useEntertainmentContext';
import ContentSection from '../components/ui/contentSection/ContentSection';
import SearchResults from '../components/layout/searchResults/SearchResults';
import {
  filterBySearch,
  selectTrending,
} from '../features/entertainment/selectors/entertainmentSelectors';

export default function Homepage() {
  const { data, toggleBookmarked, search } = useEntertainmentContext();

  const trendingShows = selectTrending(data);
  const searchFiltered = filterBySearch(data, search);

  return search.length < 1 ? (
    <>
      <ContentSection
        title="Trending"
        items={trendingShows}
        variant="trending"
        onBookmarkedChange={toggleBookmarked}
      />
      <ContentSection
        title="Recommended for you"
        items={data}
        onBookmarkedChange={toggleBookmarked}
      />
    </>
  ) : (
    <SearchResults
      searchFiltered={searchFiltered}
      search={search}
      onBookmarkedChange={toggleBookmarked}
    />
  );
}

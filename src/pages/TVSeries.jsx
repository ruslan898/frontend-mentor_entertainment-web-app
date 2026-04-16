import { useEntertainmentContext } from '../components/hooks/useEntertainmentContext';
import ContentSection from '../components/ui/contentSection/ContentSection';
import SearchResults from '../components/layout/searchResults/SearchResults';
import {
  filterBySearch,
  selectTVSeries,
} from '../features/entertainment/selectors/entertainmentSelectors';

export default function TVSeries() {
  const { data, toggleBookmarked, search } = useEntertainmentContext();

  const tvSeries = selectTVSeries(data);
  const searchFiltered = filterBySearch(tvSeries, search);

  return search.length < 1 ? (
    <ContentSection
      title="TV Series"
      items={tvSeries}
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

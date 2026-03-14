import { useOutletContext } from 'react-router';
import ContentGrid from '../components/ui/contentGrid/ContentGrid';
import ContentItem from '../components/ui/contentItem/ContentItem';
import Title from '../components/ui/title/Title';
import SearchResults from '../components/layout/searchResults/SearchResults';

export default function TVSeries() {
  const { data, toggleBookmarked, search, filterSearch } = useOutletContext();

  const tvSeries = data.filter((item) => item.category === 'TV Series');
  const searchFiltered = filterSearch(tvSeries);

  return search.length < 1 ? (
    <section className="grid-wrapper">
      <Title>TV Series</Title>
      <ContentGrid>
        {tvSeries.map((item) => (
          <ContentItem
            data={item}
            onBookmarkedChange={toggleBookmarked}
            key={item.id}
          />
        ))}
      </ContentGrid>
    </section>
  ) : (
    <SearchResults
      searchFiltered={searchFiltered}
      search={search}
      toggleBookmarked={toggleBookmarked}
    />
  );
}

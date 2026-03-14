import { useOutletContext } from 'react-router';
import ContentGrid from '../components/ui/contentGrid/ContentGrid';
import ContentItem from '../components/ui/contentItem/ContentItem';
import Title from '../components/ui/title/Title';
import SearchResults from '../components/layout/searchResults/SearchResults';

export default function Homepage() {
  const { data, toggleBookmarked, search, filterSearch } = useOutletContext();

  const trendingShows = data.filter((item) => item.isTrending === true);

  const searchFiltered = filterSearch(data);

  return search.length < 1 ? (
    <>
      <section className="grid-wrapper">
        <Title>Trending</Title>
        <ContentGrid variant="trending">
          {trendingShows.map((item) => (
            <ContentItem
              data={item}
              onBookmarkedChange={toggleBookmarked}
              key={item.id}
            />
          ))}
        </ContentGrid>
      </section>
      <section className="grid-wrapper">
        <Title>Recommended for you</Title>
        <ContentGrid>
          {data.map((item) => (
            <ContentItem
              data={item}
              onBookmarkedChange={toggleBookmarked}
              key={item.id}
            />
          ))}
        </ContentGrid>
      </section>
    </>
  ) : (
    <SearchResults
      searchFiltered={searchFiltered}
      search={search}
      toggleBookmarked={toggleBookmarked}
    />
  );
}

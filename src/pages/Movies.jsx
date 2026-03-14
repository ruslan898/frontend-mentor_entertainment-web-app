import { useOutletContext } from 'react-router';
import ContentGrid from '../components/ui/contentGrid/ContentGrid';
import ContentItem from '../components/ui/contentItem/ContentItem';
import Title from '../components/ui/title/Title';
import SearchResults from '../components/layout/searchResults/SearchResults';

export default function Movies() {
  const { data, toggleBookmarked, search, filterSearch } = useOutletContext();

  const movies = data.filter((item) => item.category === 'Movie');
  const searchFiltered = filterSearch(movies);

  return search.length < 1 ? (
    <section className="grid-wrapper">
      <Title>Movies</Title>
      <ContentGrid>
        {movies.map((item) => (
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

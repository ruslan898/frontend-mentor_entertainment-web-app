import { useOutletContext } from 'react-router';
import ContentGrid from '../components/ui/contentGrid/ContentGrid';
import ContentItem from '../components/ui/contentItem/ContentItem';
import Title from '../components/ui/title/Title';

export default function Movies() {
  const { data, toggleBookmarked } = useOutletContext();

  const movies = data.filter((item) => item.category === 'Movie');

  return (
    <section className="grid-wrapper">
      <Title>Movies</Title>
      <ContentGrid>
        {movies.map((item) => (
          <ContentItem data={item} onBookmarkedChange={toggleBookmarked} />
        ))}
      </ContentGrid>
    </section>
  );
}

import { useOutletContext } from 'react-router';
import ContentGrid from '../components/ui/contentGrid/ContentGrid';
import ContentItem from '../components/ui/contentItem/ContentItem';
import Title from '../components/ui/title/Title';

export default function TVSeries() {
  const { data, toggleBookmarked } = useOutletContext();

  const tvSeries = data.filter((item) => item.category === 'TV Series');

  return (
    <section className="grid-wrapper">
      <Title>TV Series</Title>
      <ContentGrid>
        {tvSeries.map((item) => (
          <ContentItem data={item} onBookmarkedChange={toggleBookmarked} />
        ))}
      </ContentGrid>
    </section>
  );
}

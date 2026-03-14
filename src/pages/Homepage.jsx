import { useOutletContext } from 'react-router';
import ContentGrid from '../components/ui/contentGrid/ContentGrid';
import ContentItem from '../components/ui/contentItem/ContentItem';
import Title from '../components/ui/title/Title';

export default function Homepage() {
  const { data, toggleBookmarked } = useOutletContext();

  const trendingShows = data.filter((item) => item.isTrending === true);

  return (
    <>
      <section className="grid-wrapper">
        <Title>Trending</Title>
        <ContentGrid variant="trending">
          {trendingShows.map((item) => (
            <ContentItem data={item} onBookmarkedChange={toggleBookmarked} />
          ))}
        </ContentGrid>
      </section>
      <section className="grid-wrapper">
        <Title>Recommended for you</Title>
        <ContentGrid>
          {data.map((item) => (
            <ContentItem data={item} onBookmarkedChange={toggleBookmarked} />
          ))}
        </ContentGrid>
      </section>
    </>
  );
}

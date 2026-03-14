import { useOutletContext } from 'react-router';
import ContentGrid from '../components/ui/contentGrid/ContentGrid';
import ContentItem from '../components/ui/contentItem/ContentItem';
import Title from '../components/ui/title/Title';

export default function Bookmarked() {
  const { data, toggleBookmarked } = useOutletContext();

  const bookmarkedMovies = data.filter(
    (item) => item.category === 'Movie' && item.isBookmarked === true,
  );

  const bookmarkedTVSeries = data.filter(
    (item) => item.category === 'TV Series' && item.isBookmarked === true,
  );

  return (
    <>
      {bookmarkedMovies.length > 0 && (
        <section className="grid-wrapper">
          <Title>Bookmarked Movies</Title>
          <ContentGrid>
            {bookmarkedMovies.map((item) => (
              <ContentItem data={item} onBookmarkedChange={toggleBookmarked} />
            ))}
          </ContentGrid>
        </section>
      )}

      {bookmarkedTVSeries.length > 0 && (
        <section className="grid-wrapper">
          <Title>Bookmarked TV Series</Title>
          <ContentGrid>
            {bookmarkedTVSeries.map((item) => (
              <ContentItem data={item} onBookmarkedChange={toggleBookmarked} />
            ))}
          </ContentGrid>
        </section>
      )}

      {bookmarkedTVSeries.length === 0 && (
        <h2 className="empty-placeholder">No bookmarked shows</h2>
      )}


    </>
  );
}

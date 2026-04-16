import Title from '../../ui/title/Title';
import ContentGrid from '../../ui/contentGrid/ContentGrid';
import ContentItem from '../../ui/contentItem/ContentItem';

export default function SearchResults({
  searchFiltered,
  search,
  onBookmarkedChange,
}) {
  return (
    <section className="grid-wrapper">
      <Title>
        Found {searchFiltered.length} results for ‘{search}’
      </Title>
      <ContentGrid>
        {searchFiltered.map((item) => (
          <ContentItem
            data={item}
            onBookmarkedChange={onBookmarkedChange}
            key={item.id}
          />
        ))}
      </ContentGrid>
    </section>
  );
}

import Title from '../../ui/title/Title';
import ContentGrid from '../../ui/contentGrid/ContentGrid';
import ContentItem from '../../ui/contentItem/ContentItem';
import type { SearchResults } from '../../../types/models';

export default function SearchResults({
  searchFiltered,
  search,
  onBookmarkedChange,
}: SearchResults) {
  return (
    <section className="grid-wrapper">
      <Title type="h2">
        Found {searchFiltered.length} results for ‘{search}’
      </Title>
      <ContentGrid variant='regular'>
        {searchFiltered.map((item) => (
          <ContentItem
            variant='regular'
            data={item}
            onBookmarkedChange={onBookmarkedChange}
            key={item.id}
          />
        ))}
      </ContentGrid>
    </section>
  );
}

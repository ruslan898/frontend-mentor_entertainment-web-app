import Title from '../title/Title';
import ContentGrid from '../contentGrid/ContentGrid';
import ContentItem from '../contentItem/ContentItem';

export default function ContentSection({
  title,
  items,
  variant,
  onBookmarkedChange,
}) {
  return (
    <section className="grid-wrapper">
      <Title>{title}</Title>
      <ContentGrid variant={variant}>
        {items.map((item) => (
          <ContentItem
            data={item}
            onBookmarkedChange={onBookmarkedChange}
            key={item.id}
            variant={variant}
          />
        ))}
      </ContentGrid>
    </section>
  );
}

import Title from '../title/Title';
import ContentGrid from '../contentGrid/ContentGrid';
import ContentItem from '../contentItem/ContentItem';
import type { ContentSectionProps } from '../../../types/models';



export default function ContentSection({
  title,
  items,
  variant,
  onBookmarkedChange,
}: ContentSectionProps) {
  return (
    <section className="grid-wrapper">
      <Title type="h2">{title}</Title>
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

import clsx from 'clsx';
import ContentItem from '../contentItem/ContentItem';
import styles from './ContentGrid.module.scss';

export default function ContentGrid({ variant }) {
  const { 'content-grid': contentGrid, 'trending-grid': trendingGrid } = styles;

  if (variant === 'trending') {
    return (
      <ul className={clsx(trendingGrid)}>
        <li>
          <ContentItem variant="trending" />
        </li>
        <li>
          <ContentItem variant="trending" />
        </li>
        <li>
          <ContentItem variant="trending" />
        </li>
        <li>
          <ContentItem variant="trending" />
        </li>
        <li>
          <ContentItem variant="trending" />
        </li>
      </ul>
    );
  }

  return (
    <ul className={contentGrid}>
      <li>
        <ContentItem />
      </li>
      <li>
        <ContentItem />
      </li>
      <li>
        <ContentItem />
      </li>
      <li>
        <ContentItem />
      </li>
      <li>
        <ContentItem />
      </li>
      <li>
        <ContentItem />
      </li>
      <li>
        <ContentItem />
      </li>
      <li>
        <ContentItem />
      </li>
    </ul>
  );
}

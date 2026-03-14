import { Children, cloneElement } from 'react';
import clsx from 'clsx';
import styles from './ContentGrid.module.scss';

export default function ContentGrid({ variant, children }) {
  const { 'content-grid': contentGrid, 'trending-grid': trendingGrid } = styles;

  if (variant === 'trending') {
    return (
      <ul className={clsx(trendingGrid)}>
        {Children.map(children, (child) => (
          <li>{cloneElement(child, { variant: 'trending' })}</li>
        ))}
      </ul>
    );
  }

  return (
    <ul className={contentGrid}>
      {Children.map(children, (child) => (
        <li>{child}</li>
      ))}
    </ul>
  );
}

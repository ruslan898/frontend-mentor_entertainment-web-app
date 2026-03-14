import { Children, cloneElement, useRef } from 'react';
import styles from './ContentGrid.module.scss';

export default function ContentGrid({ variant, children }) {
  const { 'content-grid': contentGrid, 'trending-grid': trendingGrid } = styles;

  const ref = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDown = true;
    startX = e.pageX - ref.current.offsetLeft;
    scrollLeft = ref.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;

    const x = e.pageX - ref.current.offsetLeft;
    const walk = x - startX;
    ref.current.scrollLeft = scrollLeft - walk;
  };

  if (variant === 'trending') {
    return (
      <ul
        className={trendingGrid}
        ref={ref}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={() => (isDown = false)}
        onMouseLeave={() => (isDown = false)}
      >
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

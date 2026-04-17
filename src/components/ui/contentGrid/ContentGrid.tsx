import { Children, cloneElement, useRef, isValidElement } from 'react';
import styles from './ContentGrid.module.scss';
import type { ContentGridProps } from '../../../types/models';

export default function ContentGrid({ variant, children }: ContentGridProps) {
  const { 'content-grid': contentGrid, 'trending-grid': trendingGrid } = styles;

  const ref = useRef<HTMLUListElement | null>(null);
  const drag = useRef({
    isDown: false,
    startX: 0,
    scrollLeft: 0,
  });

  const handleMouseDown = (e: React.MouseEvent<HTMLUListElement>): void => {
    if (!ref.current) return
    drag.current.isDown = true;
    drag.current.startX = e.pageX - ref.current.offsetLeft;
    drag.current.scrollLeft = ref.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLUListElement>):void => {
    if (!drag.current.isDown || !ref.current) return;

    const x = e.pageX - ref.current.offsetLeft;
    const walk = x - drag.current.startX;
    ref.current.scrollLeft = drag.current.scrollLeft - walk;
  };

  if (variant === 'trending') {
    return (
      <ul
        className={trendingGrid}
        ref={ref}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={() => (drag.current.isDown = false)}
        onMouseLeave={() => (drag.current.isDown = false)}
      >
        {Children.map(children, (child) => (
          isValidElement(child) ?
            <li>{cloneElement(child, { variant: 'trending' })}</li>
            : <li>{child}</li>
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

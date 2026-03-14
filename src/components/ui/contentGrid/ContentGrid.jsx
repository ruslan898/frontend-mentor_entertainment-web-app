import { Children, cloneElement, useRef } from 'react';
import styles from './ContentGrid.module.scss';

export default function ContentGrid({ variant, children }) {
  const { 'content-grid': contentGrid, 'trending-grid': trendingGrid } = styles;

  const ref = useRef(null);
  const drag = useRef({
    isDown: false,
    startX: 0,
    scrollLeft: 0
  })


  const handleMouseDown = (e) => {
    drag.current.isDown = true;
    drag.current.startX = e.pageX - ref.current.offsetLeft;
    drag.current.scrollLeft = ref.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!drag.current.isDown) return;

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

import styles from './ContentItem.module.scss';
import categoryMovie from '/src/assets/icon-category-movie.svg';

export default function ContentItem({ variant }) {
  const {
    'content-item': contentItem,
    img,
    info,
    'info-item': infoItem,
    title,
    trending,
  } = styles;

  if (variant === 'trending') {
    return (
      <article className={`${contentItem} ${trending}`}>
        <ul className={info}>
          <li className={infoItem}>2019</li>
          <li className={infoItem}>
            <img src={categoryMovie} alt="Category icon" />
            Movie
          </li>
          <li className={infoItem}>PG</li>
        </ul>
        <h3 className={title}>The Great Lands</h3>
      </article>
    );
  }

  return (
    <article className={contentItem}>
      <div className={img}></div>
      <ul className={info}>
        <li className={infoItem}>2019</li>
        <li className={infoItem}>
          <img src={categoryMovie} alt="Category icon" />
          Movie
        </li>
        <li className={infoItem}>PG</li>
      </ul>
      <h3 className={title}>The Great Lands</h3>
    </article>
  );
}

import { useWindowWidth } from '../../hooks/useWindowWidth';
import styles from './ContentItem.module.scss';
import categoryMovie from '/src/assets/icon-category-movie.svg';
import BookmarkIconEmpty from '/src/assets/icon-bookmark-empty.svg?react';
import BookmarkIconFull from '/src/assets/icon-bookmark-full.svg?react';
import playIcon from '/src/assets/icon-play.svg';
import type { EntertainmentShow } from '../../../types/models';

interface ContentItemProps {
  variant: 'default' | 'trending';
  data: EntertainmentShow;
  onBookmarkedChange: (id: string) => void;
}

export default function ContentItem({
  variant,
  data,
  onBookmarkedChange,
}: ContentItemProps) {
  const {
    'content-item': contentItem,
    'img-box': imgBox,
    info,
    'info-item': infoItem,
    title: titleClass,
    'trending-class': trendingClass,
    'bg-img': bgImg,
    'bookmark-btn': bookmarkBtn,
    'bookmark-empty': bookmarkEmpty,
    'bookmark-full': bookmarkFull,
    overlay,
    'overlay-btn': overlayBtn,
  } = styles;

  const {
    title,
    thumbnail: { trending, regular } = {},
    year,
    category,
    rating,
    isBookmarked,
    id,
  } = data ?? {};

  const windowWidth = useWindowWidth();

  const regularimage =
    windowWidth < 768
      ? regular?.small
      : windowWidth < 1024
        ? regular?.medium
        : regular?.large;

  const trendingImage = windowWidth < 768 ? trending?.small : trending?.large;

  const bookmarkIcon = isBookmarked ? (
    <BookmarkIconFull className={bookmarkFull} />
  ) : (
    <BookmarkIconEmpty className={bookmarkEmpty} />
  );

  if (variant === 'trending') {
    return (
      <article className={`${contentItem} ${trendingClass}`}>
        <div className={overlay}>
          <button type="button" className={overlayBtn}>
            <img src={playIcon} alt="Play icon" />
            Play
          </button>
        </div>
        <button
          type="button"
          className={bookmarkBtn}
          aria-label="Add to bookmarked shows"
          onClick={() => onBookmarkedChange(id)}
        >
          {bookmarkIcon}
        </button>
        <img
          src={trendingImage}
          alt="A movie/TV series thumbnail"
          className={bgImg}
        />
        <ul className={info}>
          <li className={infoItem}>{year}</li>
          <li className={infoItem}>
            <img src={categoryMovie} alt="Category icon" />
            {category}
          </li>
          <li className={infoItem}>{rating}</li>
        </ul>
        <h3 className={titleClass}>{title}</h3>
      </article>
    );
  }

  return (
    <article className={contentItem}>
      <div className={imgBox}>
        <div className={overlay}>
          <button type="button" className={overlayBtn}>
            <img src={playIcon} alt="Play icon" />
            Play
          </button>
        </div>
        <button
          type="button"
          className={bookmarkBtn}
          aria-label="Add to bookmarked shows"
          onClick={() => onBookmarkedChange(id)}
        >
          {bookmarkIcon}
        </button>
        <img src={regularimage} alt="A movie/TV series thumbnail" />
      </div>
      <ul className={info}>
        <li className={infoItem}>{year}</li>
        <li className={infoItem}>
          <img src={categoryMovie} alt="Category icon" />
          {category}
        </li>
        <li className={infoItem}>{rating}</li>
      </ul>
      <h3 className={titleClass}>{title}</h3>
    </article>
  );
}

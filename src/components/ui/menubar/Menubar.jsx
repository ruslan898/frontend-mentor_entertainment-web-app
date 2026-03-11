import styles from './Menubar.module.scss';
import logoIcon from '/src/assets/logo.svg';
import navHome from '/src/assets/icon-nav-home.svg';
import navMovies from '/src/assets/icon-nav-movies.svg';
import navTV from '/src/assets/icon-nav-tv-series.svg';
import navBookmark from '/src/assets/icon-nav-bookmark.svg';
import avatar from '/src/assets/image-avatar.png';

export default function Menubar() {
  const { menubar, logo, 'menu-item': menuItem, profile } = styles;

  return (
    <nav className={menubar}>
      <img src={logoIcon} alt="Logo" className={logo} />
      <ul className={styles.menu}>
        <li>
          <button type="button" className={menuItem} aria-label="Homepage link">
            <img src={navHome} alt="Homepage icon" />
          </button>
        </li>
        <li>
          <button
            type="button"
            className={menuItem}
            aria-label="Movies page link"
          >
            <img src={navMovies} alt="Movies page icon" />
          </button>
        </li>
        <li>
          <button
            type="button"
            className={menuItem}
            aria-label="TV series page link"
          >
            <img src={navTV} alt="TV series page icon" />
          </button>
        </li>
        <li>
          <button
            type="button"
            className={menuItem}
            aria-label="Bookmark page link"
          >
            <img src={navBookmark} alt="Bookmark page icon" />
          </button>
        </li>
      </ul>
      <button className={profile} aria-label="User profile">
        <img src={avatar} alt="Profile avatar" />
      </button>
    </nav>
  );
}

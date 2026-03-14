import { NavLink, Link } from 'react-router-dom';
import clsx from 'clsx';
import styles from './Menubar.module.scss';
import logoIcon from '/src/assets/logo.svg';
import NavHome from '/src/assets/icon-nav-home.svg?react';
import NavMovies from '/src/assets/icon-nav-movies.svg?react';
import NavTV from '/src/assets/icon-nav-tv-series.svg?react';
import NavBookmark from '/src/assets/icon-nav-bookmark.svg?react';
import avatar from '/src/assets/image-avatar.png';

export default function Menubar() {
  const {
    menubar,
    logo,
    'menu-item': menuItem,
    'menu-icon': menuIcon,
    profile,
    active,
  } = styles;

  return (
    <nav className={menubar}>
      <Link to="/">
        <img src={logoIcon} alt="Logo" className={logo} />
      </Link>
      <ul className={styles.menu}>
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => clsx(menuItem, isActive && active)}
            aria-label="Homepage link"
          >
            <NavHome className={menuIcon} />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            className={({ isActive }) => clsx(menuItem, isActive && active)}
            aria-label="Movies page link"
          >
            <NavMovies className={menuIcon} />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tv-series"
            className={({ isActive }) => clsx(menuItem, isActive && active)}
            aria-label="TV series page link"
          >
            <NavTV className={menuIcon} />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/bookmarked"
            className={({ isActive }) => clsx(menuItem, isActive && active)}
            aria-label="Bookmark page link"
          >
            <NavBookmark className={menuIcon} />
          </NavLink>
        </li>
      </ul>
      <button type="button" className={profile} aria-label="User profile">
        <img src={avatar} alt="Profile avatar" />
      </button>
    </nav>
  );
}

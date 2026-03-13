import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Searchbar from '../ui/searchbar/Searchbar';
import styles from './Layout.module.scss';

export default function Layout() {
  const { app, 'main-content': mainContent } = styles;

  return (
    <div className={app}>
      <Header />
      <main className={mainContent}>
        <Searchbar />
        <Outlet />
      </main>
    </div>
  );
}

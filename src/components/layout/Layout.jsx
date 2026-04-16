import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Searchbar from '../ui/searchbar/Searchbar';
import { useEntertainmentState } from '../../features/entertainment/hooks/useEntertainmentState';
import styles from './Layout.module.scss';

export default function Layout() {
  const { app, 'main-content': mainContent } = styles;
  const { data, search, handleSearch, toggleBookmarked } =
    useEntertainmentState();

  return (
    <div className={app}>
      <Header />
      <main className={mainContent}>
        <Searchbar handleSearch={handleSearch} searchVal={search} />
        <Outlet context={{ data, toggleBookmarked, search }} />
      </main>
    </div>
  );
}

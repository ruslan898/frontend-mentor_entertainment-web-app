import { useWindowWidth } from './hooks/useWindowWidth.js';
import Menubar from './ui/menubar/Menubar';
import Searchbar from './ui/searchbar/Searchbar.jsx';
import ContentGrid from './ui/contentGrid/ContentGrid.jsx';
import styles from './App.module.scss';

export default function App() {
  const { app, header, 'main-content': mainContent, sidebar } = styles;
  const windowWidth = useWindowWidth();

  return (
    <main className={app}>
      {windowWidth < 1024 ? (
        <header className={header}>
          <Menubar />
        </header>
      ) : (
        <aside className={sidebar}>
          <Menubar />
        </aside>
      )}
      <div className={mainContent}>
        <Searchbar />
        <ContentGrid variant="trending" />
        <ContentGrid />
      </div>
    </main>
  );
}

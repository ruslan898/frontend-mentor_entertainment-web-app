import { useWindowWidth } from './hooks/useWindowWidth.js';
import Menubar from './ui/menubar/Menubar';
import Searchbar from './ui/searchbar/Searchbar.jsx';
import styles from './App.module.scss';

export default function App() {
  const { app, header, 'main-content': mainContent, sidebar, box } = styles;
  const windowWidth = useWindowWidth();

  return (
    <div className={app}>
      {windowWidth < 1024 ? (
        <header className={header}>
          <Menubar />
        </header>
      ) : (
        <aside className={sidebar}>
          <Menubar />
        </aside>
      )}
      <main className={mainContent}>
        <Searchbar />
        <div className={box}></div>
        <div className={box}></div>
      </main>
    </div>
  );
}

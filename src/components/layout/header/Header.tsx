import Menubar from '../../ui/menubar/Menubar';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import styles from './Header.module.scss';

export default function Header() {
  const { header, sidebar } = styles;
  const windowWidth = useWindowWidth();

  return windowWidth < 1024 ? (
    <header className={header}>
      <Menubar />
    </header>
  ) : (
    <aside className={sidebar}>
      <Menubar />
    </aside>
  );
}

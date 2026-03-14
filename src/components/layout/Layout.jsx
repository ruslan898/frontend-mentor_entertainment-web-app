import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Outlet } from 'react-router-dom';
import contentData from '../../data.json';
import Header from './header/Header';
import Searchbar from '../ui/searchbar/Searchbar';
import styles from './Layout.module.scss';

export default function Layout() {
  const { app, 'main-content': mainContent } = styles;
  const [data, setData] = useState(() =>
    contentData.map((item) => ({ ...item, id: nanoid() })),
  );
  const [search, setSearch] = useState('');

  function toggleBookmarked(id) {
    setData((prevVal) => {
      return prevVal.map((item) => {
        if (item.id === id) {
          return { ...item, isBookmarked: !item.isBookmarked };
        } else {
          return item;
        }
      });
    });
  }

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function filterSearch(arr) {
    return arr.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase()),
    );
  }

  return (
    <div className={app}>
      <Header />
      <main className={mainContent}>
        <Searchbar handleSearch={handleSearch} />
        <Outlet context={{ data, toggleBookmarked, search, filterSearch }} />
      </main>
    </div>
  );
}

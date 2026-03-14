import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Searchbar from '../ui/searchbar/Searchbar';
import styles from './Layout.module.scss';

export default function Layout() {
  const { app, 'main-content': mainContent } = styles;

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/src/data.json');
      const data = await res.json();
      setData(() => data.map((item) => ({ ...item, id: nanoid() })));
    }

    fetchData();
  }, []);

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

  console.log(data);

  return (
    <div className={app}>
      <Header />
      <main className={mainContent}>
        <Searchbar />
        <Outlet context={{data, toggleBookmarked}} />
      </main>
    </div>
  );
}

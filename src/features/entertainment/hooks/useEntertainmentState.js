import { useState } from 'react';
import { nanoid } from 'nanoid';
import contentData from '../../../data.json';

export function useEntertainmentState() {
  const [data, setData] = useState(() =>
    contentData.map((item) => ({ ...item, id: nanoid() })),
  );
  const [search, setSearch] = useState('');

  function toggleBookmarked(id) {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, isBookmarked: !item.isBookmarked } : item,
      ),
    );
  }

  function handleSearch(event) {
    setSearch(event.target.value);
  }

  return {
    data,
    search,
    handleSearch,
    toggleBookmarked,
  };
}

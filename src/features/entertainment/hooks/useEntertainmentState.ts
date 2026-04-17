import { useState } from 'react';
import { nanoid } from 'nanoid';
import contentData from '../../../data.json';
import type { EntertainmentShow } from '../../../types/models';

export function useEntertainmentState() {
  const [data, setData] = useState<EntertainmentShow[]>(() =>
    contentData.map((item) => ({ ...item, id: nanoid() })),
  );
  const [search, setSearch] = useState<string>('');

  function toggleBookmarked(id: string): void {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, isBookmarked: !item.isBookmarked } : item,
      ),
    );
  }

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>):void {
    setSearch(event.target.value);
  }

  return {
    data,
    search,
    handleSearch,
    toggleBookmarked,
  };
}

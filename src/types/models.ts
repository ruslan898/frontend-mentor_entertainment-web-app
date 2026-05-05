import type { ReactElement } from 'react';

export interface EntertainmentShow {
  id: string;
  title: string;
  thumbnail: {
    trending?: {
      small: string;
      large: string;
    };
    regular: {
      small: string;
      medium: string;
      large: string;
    };
  };
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

export interface SearchResults {
  searchFiltered: EntertainmentShow[];
  search: string;
  onBookmarkedChange: (id: string) => void;
}

export interface OutletCountext {
  data: EntertainmentShow[];
  toggleBookmarked: (id: string) => void;
  search: string;
}

import type { ReactElement } from "react";

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

export interface ContentSectionProps {
  title: string;
  items: EntertainmentShow[];
  variant: 'default' | 'trending';
  onBookmarkedChange: (id: string) => void;
}

export interface TitleProps {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
  className?: string;
}

export interface SearchResults {
  searchFiltered: EntertainmentShow[];
  search: string;
  onBookmarkedChange: (id: string) => void;
}

export interface ContentGridProps {
  variant: 'default' | 'trending';
  children: ContentGridChild | ContentGridChild[];
}

export interface ContentItemProps {
  variant: 'default' | 'trending';
  data: EntertainmentShow;
  onBookmarkedChange: (id: string) => void;
}

export interface SearchbarProps {
  handleSearch: (event: React.ChangeEvent<HTMLInputElement, Element>) => void;
  searchVal: string;
}

export interface OutletCountext {
  data: EntertainmentShow[];
  toggleBookmarked: (id: string) => void;
  search: string;
}

type ContentGridChild = ReactElement<{ variant: 'default' | 'trending' }>;

export interface ContentGridProps {
  variant: 'default' | 'trending';
  children: ContentGridChild | ContentGridChild[];
}
import styles from './Searchbar.module.scss';
import searchIcon from '/src/assets/icon-search.svg';

interface SearchbarProps {
  handleSearch: (event: React.ChangeEvent<HTMLInputElement, Element>) => void;
  searchVal: string;
}

export default function Searchbar({ handleSearch, searchVal }: SearchbarProps) {
  const { searchbar, 'searchbar-input': searchbarInput } = styles;

  return (
    <div className={searchbar}>
      <img src={searchIcon} alt="Search icon" />
      <input
        type="text"
        name="name"
        placeholder="Search for movies or TV series"
        className={searchbarInput}
        onChange={handleSearch}
        value={searchVal}
      />
    </div>
  );
}

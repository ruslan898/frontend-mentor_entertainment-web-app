import styles from './Searchbar.module.scss';
import searchIcon from '/src/assets/icon-search.svg';

export default function Searchbar({handleSearch, searchVal}) {
  const { searchbar, 'searchbar-input': searchbarInput } = styles;

  return (
    <form className={searchbar}>
      <img src={searchIcon} alt="Search icon" />
      <input
        type="text"
        name='name'
        placeholder="Search for movies or TV series"
        className={searchbarInput}
        onChange={handleSearch}
        value={searchVal}
      />
    </form>
  );
}

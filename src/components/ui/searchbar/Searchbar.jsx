import styles from './Searchbar.module.scss';
import searchIcon from '/src/assets/icon-search.svg';

export default function Searchbar() {
  const { searchbar, 'searchbar-input': searchbarInput } = styles;

  return (
    <form action="#" className={searchbar}>
      <img src={searchIcon} alt="Search icon" />
      <input
        type="text"
        name='name'
        placeholder="Search for movies or TV series"
        className={searchbarInput}
      />
    </form>
  );
}

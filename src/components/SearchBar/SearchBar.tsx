import { useSearch } from "hooks/useSearch";

import styles from "./index.module.scss";

export const SearchBar: React.FC = () => {
  const { keyword, onChange } = useSearch();

  return (
    <input
      data-testid="search-bar__input"
      value={keyword}
      onChange={onChange}
      className={styles.SearchBar}
      placeholder="Search the keyword..."
    />
  );
};

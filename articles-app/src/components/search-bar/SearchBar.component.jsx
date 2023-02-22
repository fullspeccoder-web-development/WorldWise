import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../../store/search/search.action";
import { selectSearchQuery } from "../../store/search/search.selector";

import "./SearchBar.styles.scss";

const SearchBar = () => {
  const query = useSelector(selectSearchQuery);
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    dispatch(setQuery(evt.target.value));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(setQuery(query));
  };

  return (
    <form className="SearchBar" onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Search..."
          onChange={handleChange}
          value={query}
        />
        <button type="submit">Q</button>
      </div>
    </form>
  );
};

export default SearchBar;

import "./App.scss";

import Articles from "./components/articles/Articles.component";
import SearchBar from "./components/search-bar/SearchBar.component";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Articles />
    </div>
  );
}

export default App;

import { useState } from "react";
import {
  LoaderDiv,
  GalleryListContainer,
  GalleryImageContainer,
  AppContainer,
} from "./App";
import { useFetch } from "./useFetch";

function App() {
  const { images, error, updateQuery, isLoading } = useFetch();
  const [currQuery, setCurrQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    updateQuery(currQuery);
  };

  console.log(error);

  return (
    <AppContainer>
      {isLoading && <LoaderDiv />}
      <h1>Snapshot</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={currQuery}
          onChange={(e) => setCurrQuery(e.target.value)}
        />
      </form>
      {!isLoading && !error && <GalleryList images={images} />}
    </AppContainer>
  );
}

function GalleryList({ images }) {
  return (
    <GalleryListContainer>
      {images.map((image, ind) => (
        <GalleryImage key={image.id || ind} image={image} />
      ))}
    </GalleryListContainer>
  );
}

const GalleryImage = ({ image }) => {
  return (
    <GalleryImageContainer>
      <img src={image?.urls?.thumb} alt={image.alt_description} />
    </GalleryImageContainer>
  );
};

export default App;

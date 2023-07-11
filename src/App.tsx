"use client";
import { ErrorBoundary } from "react-error-boundary";

import { SearchBar, Gallery, ScrollTopButton } from "components";
import { SearchContextProvider } from "context/SearchContext";

function App() {
  return (
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <h1>Flickr Portal</h1>
      <SearchContextProvider>
        <SearchBar />
        <Gallery />
        <ScrollTopButton/>
      </SearchContextProvider>
    </ErrorBoundary>
  );
}

export default App;

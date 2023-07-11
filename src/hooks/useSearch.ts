import { useEffect, useRef } from "react";

import { useFlickrContext } from "context/FlickrContext";
import { useSearchContext } from "context/SearchContext";
import { useDebounce } from "utils/debounce";
import { FlickrPhoto, fetchImages } from "services/flickr";

export const useSearch = () => {
  const { setPhotos, setIsLast } = useFlickrContext();
  const { keyword, setKeyword, setIsLoading, page, setPage } =
    useSearchContext();
  const abortConRef = useRef<AbortController | null>(null);

  const searchImages = async () => {
    // We are cancelling ongoing requests in case of new input after blur.
    if (abortConRef.current) abortConRef.current.abort();
    abortConRef.current = new AbortController();

    setIsLoading(true);

    fetchImages(keyword, page, abortConRef.current.signal)
      .then(({ photos }) => {
        const { page, pages, photo } = photos;

        setPhotos((prev: FlickrPhoto[]) => [...prev, ...photo]);

        // Due Flickr has `page` and `pages` properties we need check are we in the last page.
        page === pages && setIsLast(true);
      })
      .finally(() => setIsLoading(false));
  };

  // We are trying to debounce the typings until users stops.
  const delayedRequest = useDebounce(
    async () => keyword.length && searchImages()
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  // We are reseting our search  results due we have new input.
  useEffect(() => {
    setPhotos([]);
    setPage(1);

    delayedRequest();
  }, [keyword]);

  // We are requesting search in case we have reached end of the page, means page size should be bigger than 1.
  useEffect(() => {
    if (page > 1) {
      delayedRequest();
    }
  }, [page]);

  return {
    keyword,
    onChange,
  };
};

import { useCallback, useRef } from "react";

import { AsyncImage } from "components";
import { useFlickrContext } from "context/FlickrContext";
import { useSearchContext } from "context/SearchContext";

import styles from "./index.module.scss";

export const Gallery: React.FC = () => {
  const { photos, isLast } = useFlickrContext();
  const { isLoading, page, setPage } = useSearchContext();

  const observer = useRef<IntersectionObserver | null>(null);

  const loadMoreRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(
        (entries) => entries[0].isIntersecting && !isLast && setPage(page + 1)
      );

      if (node && observer.current) observer.current.observe(node);
    },
    [isLast, isLoading]
  );

  if (!photos.length) {
    return <div>Looks like there aren’t any matches for your search</div>;
  }

  return (
    <div data-testid="photo-gallery">
      <div className={styles.Gallery}>
        {photos.map((photo) => (
          // Some cases Flickr API returns same item inside list.
          // That's why we can't trust `photo.id` as unique key, should use our own uuid.
          <AsyncImage imageData={photo} key={crypto.randomUUID()} />
        ))}
      </div>
      <div className={styles.GalleryMeta}>
        {isLoading && <div>Loading...</div>}
        {isLast && <div>Reached to the end</div>}
        {!isLoading && !isLast && <div ref={loadMoreRef}>Load more</div>}
      </div>
    </div>
  );
};

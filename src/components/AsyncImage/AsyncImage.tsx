import clsx from "classnames";

import HeartSVG from "assets/heart.svg";
import { useFlickrContext } from "context/FlickrContext";
import { FlickrPhoto } from "services/flickr";
import { EImgSize, EDeviceSize, getSource } from "utils/config";
import { format } from "utils/format";

import styles from "./index.module.scss";

type PropsType = {
  imageData: FlickrPhoto;
};

export const AsyncImage: React.FC<PropsType> = ({ imageData }) => {
  const { id, server, title, ownername, views, dateupload } = imageData;
  const { isFavorite, toggleFavorites } = useFlickrContext();
  const isSaved = isFavorite(id);

  // Flickr API sometimes returns 0 for `server` property which makes imageSrc fail.
  if (server === "0") return null;

  return (
    <div className={styles.ImageWrapper} data-testid="async-image--wrapper">
      <picture>
        <source media={EDeviceSize.DESKTOP} srcSet={getSource(imageData)} />
        <source
          media={EDeviceSize.IPAD}
          srcSet={getSource(imageData, EImgSize.LARGE)}
        />
        <img
          alt={title}
          loading="lazy"
          src={getSource(imageData, EImgSize.SMALL)}
          className={styles.ImageBox}
        />
      </picture>
      <div className={styles.ImageOverlay} />
      <div
        className={clsx(styles.ImageMetaButton, { red: isSaved })}
        onClick={() => toggleFavorites(id)}
      >
        <HeartSVG />
      </div>
      <div className={styles.ImageMetaContent}>
        <b>"{title}"</b>
        <i>@{ownername}</i>
        <span>
          👁️{views} / {format(dateupload)}
        </span>
      </div>
    </div>
  );
};

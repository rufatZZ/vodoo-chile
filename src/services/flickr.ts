import { SEARCH_PATH } from "utils/config";

export type FlickrPhoto = {
  farm: string;
  id: string;
  secret: string;
  server: string;
  title: string;
  ownername: string;
  dateupload: string;
  views: string;
};

type FlickrPhotoRs = {
  photos: {
    photo: FlickrPhoto[];
    page: number;
    pages: number;
    per_page: number;
    total: number;
  };
};

export const fetchImages = (
  keyword: string,
  currentPage: number,
  signal: AbortSignal
): Promise<FlickrPhotoRs> => {
  const endpoint = `${SEARCH_PATH}&text=${keyword}&page=${currentPage}`;

  return fetch(endpoint, { signal }).then(
    (res) => res.json() as Promise<FlickrPhotoRs>
  );
};

import { FlickrPhoto } from "services/flickr";

const CONSUMER_KEY = "ca054705a729ac038d8eba8bbb0da7d9";
const BASE_URL = `https://www.flickr.com/services/rest?api_key=${CONSUMER_KEY}`;
export const SEARCH_PATH = `${BASE_URL}&method=flickr.photos.search&format=json&nojsoncallback=1&sort=interestingness-desc&per_page=50&extras=owner_name,views,date_upload&`;

export enum EImgSize {
  REGULAR = "",
  SMALL = "_m",
  LARGE = "_b",
}

export enum EDeviceSize {
  DESKTOP = "(min-width: 1024px)",
  IPAD = "(min-width: 768px)",
}

export const getSource = (
  { farm, server, id, secret }: FlickrPhoto,
  size: EImgSize = EImgSize.REGULAR
) => {
  return `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}${size}.jpg`;
};

import { createContext, useContext, useEffect, useState } from "react";

import { FlickrPhoto } from "services/flickr";
import { ReactFunctionComponentWithChildren } from "types";

type FlickrContextPropsType = {
  photos: FlickrPhoto[];
  isLast: boolean;
  setIsLast: Function;
  setPhotos: Function;
  toggleFavorites: Function;
  isFavorite: Function;
};

const FlickrContext = createContext<FlickrContextPropsType | null>(null);

export function useFlickrContext() {
  const flickrContext = useContext(FlickrContext);

  if (!flickrContext) {
    throw new Error(
      "useFlickrContext must be used within the FlickrContext.Provider"
    );
  }
  return flickrContext;
}

export const FlickrContextProvider: ReactFunctionComponentWithChildren = ({
  children,
}) => {
  const [photos, setPhotos] = useState<FlickrPhoto[]>([]);
  const [favorites, setFavorites] = useState<Map<string, boolean>>(new Map());
  const [isLast, setIsLast] = useState<boolean>(false);

  const isFavorite = (id: string) => favorites.has(id);

  const toggleFavorites = (id: string) => {
    if (favorites.has(id)) {
      favorites.delete(id);
    } else {
      favorites.set(id, true);
    }

    setFavorites(new Map(favorites));

    if (!favorites.size) {
      localStorage.removeItem("favorites");
    } else {
      localStorage.setItem(
        "favorites",
        JSON.stringify(Array.from(favorites.keys()))
      );
    }
  };

  useEffect(() => {
    const parsedData: string[] = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    if (parsedData) {
      setFavorites(() => new Map(parsedData.map((id) => [id, true])));
    }
  }, []);

  return (
    <FlickrContext.Provider
      value={{
        photos,
        isLast,
        setPhotos,
        setIsLast,
        toggleFavorites,
        isFavorite,
      }}
    >
      {children}
    </FlickrContext.Provider>
  );
};

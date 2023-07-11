import { createContext, useContext, useState } from "react";

import { ReactFunctionComponentWithChildren } from "types";

type SearchContextPropsType = {
  page: number;
  keyword: string;
  isLoading: boolean;
  setPage: Function;
  setKeyword: Function;
  setIsLoading: Function;
};

const SearchContext = createContext<SearchContextPropsType | null>(null);

export function useSearchContext() {
  const searchContext = useContext(SearchContext);

  if (!searchContext) {
    throw new Error(
      "useSearchContext must be used within the SearchContext.Provider"
    );
  }
  return searchContext;
}

export const SearchContextProvider: ReactFunctionComponentWithChildren = ({
  children,
}) => {
  const [keyword, setKeyword] = useState<string>("cat");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  return (
    <SearchContext.Provider
      value={{
        keyword,
        page,
        isLoading,
        setPage,
        setKeyword,
        setIsLoading,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

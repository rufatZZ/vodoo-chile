import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

import { FlickrContextProvider } from "context/FlickrContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FlickrContextProvider>
      <App />
    </FlickrContextProvider>
  </React.StrictMode>
);

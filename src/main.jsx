import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./bootstrap.css";
import App from "./App.jsx";
import { initialState, reducer } from "./util/Reducer.jsx";
import { DataProvider } from "./Components/DataProvider/DataProvider.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataProvider reducer={reducer} initialState={initialState}>
      <App />
    </DataProvider>
  </StrictMode>
);

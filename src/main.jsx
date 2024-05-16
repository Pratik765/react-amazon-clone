import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Bag from "./components/Bag.jsx";
import ItemsContainer from "./components/ItemsContainer.jsx";
import { Provider } from "react-redux";
import amazonStore from "./store/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <ItemsContainer /> },
      { path: "bag", element: <Bag /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={amazonStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

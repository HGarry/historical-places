import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { createBrowserRouter, RouterProvider } from "react-router";
import ViewDetails from "./components/ViewDetails.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/place/:id", element: <ViewDetails /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>,
);

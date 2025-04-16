import React, { StrictMode } from "react";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DictionaryProvider } from "./context/DictionaryContext";


// 🧩 Import the new components

import ProjectDetails from "./routes/ProjectDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProjectDetails />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DictionaryProvider>
      <RouterProvider router={router} />
    </DictionaryProvider>
  </StrictMode>
);

reportWebVitals();

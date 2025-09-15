import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './Home.jsx';
import About, { Song, Movie, Other } from './About.jsx';
import { StrictMode } from 'react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "about",
        element: <About />,
        children: [
          { path: "song", element: <Song /> },
          { path: "movie", element: <Movie /> },
          { path: ":keyword", element: <Other /> },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
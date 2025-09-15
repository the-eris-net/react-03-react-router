import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './Home.jsx';
import About, { Song, Movie, Other } from './About.jsx';
import External, { ExternalError } from './External.jsx';
import { StrictMode } from 'react';

// const externalData = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }
//   return response.json();
// }

const externalData = () => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve({ title: "성공 타이틀", body: "성공 바디" });
      }
      else {
        reject(new Error("실패 했습니다"));
      }
    }, 1000);
  });
};

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
      {
        path: "external",
        element: <External />,
        errorElement: <ExternalError />,
        loader: async () => {
          return externalData();
        }
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
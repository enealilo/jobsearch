import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import PostJob from "./pages/postJob.jsx";
import AboutUs from "./pages/aboutUs.jsx";
import JobDesc from "./pages/JobDesc.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async ({ request }) => {
          const url = new URL(request.url);
          const q = url.searchParams.get("query");
          const response = await fetch(`http://localhost:8000/api/jobs?${ q ? "query=" + q : "" }`, {
            method: "GET",
          });
          const jobs = await response.json();
          return {jobs, query: q ?? ""};
        },
      },
      {
        path: "/",
        element: <PostJob />,
        loader: async () => {
          return null;
        },
      },
      {
        path: "/postjob",
        element: <PostJob />,
        loader: async () => {
          return null;
        },
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
        loader: async () => {
          return null;
        },
      },
      {
        path: "/job/:id",
        element: <JobDesc />,
        loader: async ({ params }) => {
          console.log(params.id);
          const requestOptions = {
            method: "GET",
            redirect: "follow",
          };

          const response = await fetch(
            `http://localhost:8000/api/jobs/${params.id}`,
            requestOptions
          );
          const job = await response.json();
          return job;
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);

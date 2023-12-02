import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import PostJob from './pages/postJob.jsx'
import AboutUs from './pages/aboutUs.jsx'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>,
        loader: async () => {
          const response = await fetch(`http://localhost:8000/api/jobs`, {
                method: 'GET',
              });
              const jobs = await response.json();
              return jobs;
        }
      },
      {
        path: '/postjob',
        element: <PostJob/>,
        loader: async () => {
          return null;
        }
      },
      {
        path: '/aboutus',
        element: <AboutUs/>,
        loader: async () => {
          return null;
        }
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Create from './pages/Create.jsx'
import Note from './pages/Note.jsx'
import Layout from './pages/Layout.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
        {
            path: "/",
            element: <Create />,
        },
        {
          path: "/notes",
          element: <Note />,
        }
    ],
}
])



createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)

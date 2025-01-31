import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import BlogDetails from './pages/BlogDetails'
import Error from './pages/Error'

let allRoutes = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home/>
    },
    {
      path: 'about',
      element: <About/>
    },
    {
      path: 'contact',
      element: <Contact/>
    },
    {
      path: 'blog',
      element: <Blog/>
    },
    {
      path: 'blog/:id',
      element: <BlogDetails/>
    },
    {
      path: '*',
      element: <Error/>
    },
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={allRoutes}>
      
    </RouterProvider>
  </StrictMode>,
)

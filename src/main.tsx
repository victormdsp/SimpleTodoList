import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { ErrorPage } from './pages/ErrorPage/ErrorPage'
import { Home } from './pages/Home/Home'
import { Lista } from './pages/Lista/Lista'
import { Perfil } from './pages/Perfil/Perfil'
import { Navigation } from './pages/Navigation/Navigation'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation/>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: 'home',
        element: <Home/>
      },
      {
        path: 'todos',
        element: <Lista/>
      },
      {
        path:'perfil',
        element: <Perfil/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import  {RouterProvider, createHashRouter} from "react-router-dom"
import { Home } from './pages/Home'
import { Layout } from './Layout'
import { About } from './pages/About'
import "../src/style.css"


const router=createHashRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:"/about",
        element:<About/>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

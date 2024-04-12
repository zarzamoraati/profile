import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

// const router=createBrowserRouter([
//   {
//     path:"/",
//     element:<Layout/>,
//     children:[
//       {
//         index:true,
//         element:<Home/>
//       },
//       {
//         path:"/about",
//         element:<About/>
//       }
//     ]
//   }
// ])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)

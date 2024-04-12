import { Outlet } from "react-router-dom"

export const Layout = () => {
  return (
    <div>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <div>
            <Outlet/>
        </div>
    </div>
  )
}

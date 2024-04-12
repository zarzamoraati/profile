import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
export const Layout = () => {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <div>
            <Outlet/>
        </div>
    </div>
  )
}

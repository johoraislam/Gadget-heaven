import { Outlet } from "react-router"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen bg-gray-100">
        <Outlet></Outlet>
      </div>
    <Footer></Footer>
    </div>
  )
}

export default MainLayout
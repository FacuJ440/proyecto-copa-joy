import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { Outlet } from "react-router"

const Layout: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className='min-h-screen'>
        <Outlet /> {/* Aquí se renderizan las páginas */}
      </main>
      <Footer />
    </>
  )
}

export default Layout

import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { Outlet } from "react-router"

const Layout: React.FC = () => {
  return (
    <div className='flex min-h-screen flex-col'>
      <Navbar />
      <main className='flex-grow'>
        <Outlet /> {/* Aquí se renderizan las páginas */}
      </main>
      <Footer />
    </div>
  )
}

export default Layout

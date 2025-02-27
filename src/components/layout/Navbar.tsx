import { Link } from "react-router"
import { Button } from "@/components/ui/button"
import Logo from "@/assets/logo_copa.svg"
import BorderBlue from "@/assets/border_blue.svg"
import SplashPurple from "@/assets/splash_purple.svg"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import { Menu } from "lucide-react"
import { useState } from "react"

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className='container mx-auto flex items-center justify-between py-4'>
      <Link to='/'>
        <img src={Logo} alt='Logo Copa Universitaria' className='w-28' />
      </Link>
      <img src={BorderBlue} className='absolute -right-32 -top-28 md:-right-52 md:-top-56 lg:-right-32 lg:-top-72' />
      <img src={SplashPurple} className='absolute -top-52 left-72 hidden w-52 lg:block' />

      {/* Menú Desktop a partir de lg */}
      <div className='z-10 hidden items-center space-x-4 text-white lg:block'>
        <Button asChild variant='ghost'>
          <Link to='/dashboard'>Sobre el Torneo</Link>
        </Button>
        <Button asChild variant='ghost'>
          <Link to='/reclamos'>Imágenes</Link>
        </Button>
        <Button asChild variant='ghost'>
          <Link to='/dashboard'>Cómo Publicitar</Link>
        </Button>
      </div>

      {/* Menú Hamburguesa hasta lg */}
      <div className='z-10 mr-10 lg:hidden'>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className='lg:hidden' onClick={() => setOpen(true)}>
            <Menu className='h-6 w-6 text-black' />
          </SheetTrigger>
          <SheetContent side='right' className='bg-gray-900 text-white'>
            <div className='mt-10 flex flex-col space-y-4'>
              <Link to='/dashboard' className='text-lg' onClick={() => setOpen(false)}>
                Sobre el Torneo
              </Link>
              <Link to='/reclamos' className='text-lg' onClick={() => setOpen(false)}>
                Imágenes
              </Link>
              <Link to='/dashboard' className='text-lg' onClick={() => setOpen(false)}>
                Cómo Publicitar
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}

export default Navbar

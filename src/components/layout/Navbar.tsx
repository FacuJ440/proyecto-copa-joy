import { Link } from "react-router"
import { Button } from "@/components/ui/button"
import Logo from "@/assets/logo_copa.svg"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import { Menu } from "lucide-react"
import { useState } from "react"

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className='relative'>
      <div className='container relative mx-auto flex items-center justify-between py-4'>
        <div>
          <Link to='/'>
            <img src={Logo} alt='Logo Copa Universitaria' className='w-28' />
          </Link>
        </div>

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
        <div className='z-10 mr-5 md:mr-10 lg:hidden'>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className='' onClick={() => setOpen(true)}>
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
    </div>
  )
}

export default Navbar

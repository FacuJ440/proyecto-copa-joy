import { Link } from "react-router"
import { Button } from "@/components/ui/button"
import Logo from "@/assets/logo_copa.svg"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import { Menu } from "lucide-react"
import { useState } from "react"
import { Info } from "lucide-react"
import { Image } from "lucide-react"
import { MessageCircleQuestion } from "lucide-react"

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
        <div className='z-10 hidden items-center space-x-4 font-edo lg:block'>
          <Button asChild variant='secondary' className='bg-[#91007B] text-white hover:text-black'>
            <Link to='/dashboard'>Sobre el Torneo</Link>
          </Button>
          <Button asChild variant='secondary' className='bg-[#91007B] text-white hover:text-black'>
            <Link to='/reclamos'>Imagenes</Link>
          </Button>
          <Button asChild variant='secondary' className='bg-[#91007B] text-white hover:text-black'>
            <Link to='/dashboard'>Como Publicitar</Link>
          </Button>
        </div>

        {/* Menú Hamburguesa hasta lg */}
        <div className='z-10 mr-5 md:mr-10 lg:hidden'>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className='' onClick={() => setOpen(true)}>
              <Menu className='h-6 w-6 text-black' />
            </SheetTrigger>
            <SheetContent side='right' className='bg-gray-600 font-edo text-white'>
              <div className='mt-10 flex flex-col space-y-10'>
                <Button variant='ghost' className='flex justify-start'>
                  <Link to='/dashboard' className='flex items-center gap-2 text-xl' onClick={() => setOpen(false)}>
                    <Info />
                    Sobre el Torneo
                  </Link>
                </Button>
                <Button variant='ghost' className='flex justify-start'>
                  <Link to='/reclamos' className='flex items-center gap-2 text-xl' onClick={() => setOpen(false)}>
                    <Image />
                    Imagenes
                  </Link>
                </Button>
                <Button variant='ghost' className='flex justify-start'>
                  <Link to='/dashboard' className='flex items-center gap-2 text-xl' onClick={() => setOpen(false)}>
                    <MessageCircleQuestion />
                    Como Publicitar
                  </Link>
                </Button>
              </div>
              <div className='mt-64'>
                <img src={Logo} alt='' />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  )
}

export default Navbar

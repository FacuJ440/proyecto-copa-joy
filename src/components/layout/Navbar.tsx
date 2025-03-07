import { Link, useLocation, useNavigate } from "react-router"
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
  const navigate = useNavigate()
  const location = useLocation()

  const isHowAdvertisePage = location.pathname === "/como-publicitar"

  const handleScroll = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      const offset = 80
      const elementPosition = section.getBoundingClientRect().top + window.scrollY
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" })
    }
  }

  const handleMobileScroll = (id: string) => {
    setOpen(false) // Cierra el menú primero
    setTimeout(() => handleScroll(id), 200) // Espera 300ms antes de hacer el scroll
  }

  const handleInicioClick = () => {
    navigate("/")
  }

  return (
    <div className='relative'>
      <div className='container relative mx-auto flex items-center justify-between py-4'>
        <div>
          <Link to='/'>
            <img src={Logo} alt='Logo Copa Universitaria' className='w-28' />
          </Link>
        </div>

        {/* Menú Desktop a partir de lg */}
        <div className='font-edo z-10 hidden items-center space-x-4 lg:block'>
          {isHowAdvertisePage ? (
            <Button
              onClick={handleInicioClick}
              variant='secondary'
              className='bg-[#91007B] text-white hover:text-black'
            >
              Inicio
            </Button>
          ) : (
            <>
              <Button
                onClick={() => handleScroll("sobre-torneo")}
                variant='secondary'
                className='bg-[#91007B] text-white hover:text-black'
              >
                Sobre el Torneo
              </Button>
              <Button
                onClick={() => handleScroll("imagenes")}
                variant='secondary'
                className='bg-[#91007B] text-white hover:text-black'
              >
                Imagenes
              </Button>
              <Button
                onClick={() => navigate("/como-publicitar")}
                variant='secondary'
                className='bg-[#91007B] text-white hover:text-black'
              >
                <Link to='/como-publicitar'>Como Publicitar</Link>
              </Button>
            </>
          )}
        </div>

        {/* Menú Hamburguesa hasta lg */}
        <div className='z-10 mr-5 md:mr-10 lg:hidden'>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger onClick={() => setOpen(true)}>
              <Menu className='h-6 w-6 text-black' />
            </SheetTrigger>
            <SheetContent side='right' className='font-edo bg-gray-600 text-white'>
              <div className='mt-10 flex flex-col space-y-10'>
                {isHowAdvertisePage ? (
                  <Button variant='ghost' className='flex justify-start'>
                    <Link
                      to=''
                      className='flex items-center gap-2 text-xl'
                      onClick={() => {
                        handleInicioClick()
                        setOpen(false)
                      }}
                    >
                      Inicio
                    </Link>
                  </Button>
                ) : (
                  <>
                    <Button variant='ghost' className='flex justify-start'>
                      <Link
                        to=''
                        className='flex items-center gap-2 text-xl'
                        onClick={() => handleMobileScroll("sobre-torneo")}
                      >
                        <Info />
                        Sobre el Torneo
                      </Link>
                    </Button>
                    <Button variant='ghost' className='flex justify-start'>
                      <Link
                        to=''
                        className='flex items-center gap-2 text-xl'
                        onClick={() => handleMobileScroll("imagenes")}
                      >
                        <Image />
                        Imagenes
                      </Link>
                    </Button>
                    <Button variant='ghost' className='flex justify-start'>
                      <Link
                        to='/como-publicitar'
                        className='flex items-center gap-2 text-xl'
                        onClick={() => setOpen(false)}
                      >
                        <MessageCircleQuestion />
                        Como Publicitar
                      </Link>
                    </Button>
                  </>
                )}
              </div>
              <div className='mt-64'>
                <img src={Logo} alt='Logo Copa Universitaria' />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  )
}

export default Navbar

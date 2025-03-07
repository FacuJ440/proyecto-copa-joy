import { Link } from "react-router"
import { Button } from "@/components/ui/button"
import Logo from "@/assets/logo_copa.svg"

const Footer: React.FC = () => {
  return (
    <div className='relative bottom-0 bg-white'>
      <div className='container mx-auto flex flex-col items-center justify-between gap-4 py-6 md:flex-row md:gap-0'>
        {/* Logo */}
        <div>
          <Link to='/'>
            <img src={Logo} alt='Logo Copa Universitaria' className='w-28' />
          </Link>
        </div>

        {/* Botón de marca */}
        <div className='order-last md:order-none'>
          <Button variant='ghost' className='font-bold text-[#505050]'>
            <Link target='_blank' to='https://www.instagram.com/yolk.web/'>
              by Yolk®
            </Link>
          </Button>
        </div>

        {/* Redes sociales */}
        <div className='flex space-x-4 font-edo'>
          <Button asChild variant='ghost' className='text-black hover:text-gray-700'>
            <Link to='/dashboard'>WHATSAPP</Link>
          </Button>
          <Button asChild variant='ghost' className='text-black hover:text-gray-700'>
            <Link to='/reclamos'>INSTAGRAM</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Footer

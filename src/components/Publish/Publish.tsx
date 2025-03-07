import ComoPublicitar from "@/assets/back_publish.jpg"
import { Button } from "../ui/button"
import { Link } from "react-router"

const Publish: React.FC = () => {
  return (
    <div className='relative mt-36 flex items-center justify-center 2xl:mt-60'>
      <img src={ComoPublicitar} className='absolute top-0 w-full max-w-[3000px]' />

      <div className='relative z-10 mt-20 text-center md:mt-96'>
        <h2 className='text-2xl font-bold text-white md:text-4xl lg:text-5xl'>
          ¿CÓMO PUBLICITAR EN LA <span className='text-black'>COPA UNIVERSITARIA?</span>
        </h2>
        <Button className='mt-6 rounded-md bg-black px-6 py-3 text-xl text-white hover:bg-gray-800 md:mt-8'>
          <Link to='/como-publicitar'>Clickeá acá</Link>
        </Button>
      </div>
    </div>
  )
}

export default Publish

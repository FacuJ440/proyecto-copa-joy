import React from "react"
import { Carousel } from "../Carousel"
import Img1 from "@/assets/image1.jpg"
import Img2 from "@/assets/image2.jpg"
import Img3 from "@/assets/image3.jpg"
import Img4 from "@/assets/image4.jpg"
import SplashBlack from "@/assets/splash_black.svg"

const images = [Img1, Img2, Img3, Img4]

const Images: React.FC = () => {
  return (
    <div>
      <div className='relative mt-4 flex items-center justify-center'>
        <h2 className='relative z-10 mt-20 font-edo text-3xl text-black md:mt-24 md:text-5xl lg:mt-44 lg:text-7xl 2xl:mt-72'>
          Imagenes
        </h2>
        <img src={SplashBlack} className='absolute -left-52 top-72 w-64 rotate-90 lg:top-96' />
        <img src={SplashBlack} className='absolute -right-44 w-64 rotate-90 2xl:top-32' />
      </div>
      <div className='relative h-64 w-full p-5 lg:px-20'>
        <Carousel
          items={images}
          renderItem={(image) => (
            <div className='h-80 overflow-hidden rounded-lg shadow-lg'>
              <img src={image} alt='Galería' className='h-full w-full object-cover' />
            </div>
          )}
          slidesPerView={2}
        />
      </div>
    </div>
  )
}

export default Images

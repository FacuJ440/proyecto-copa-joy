import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation, Autoplay } from "swiper/modules"
// @ts-expect-error TypeScript no reconoce los archivos CSS
import "swiper/css"
// @ts-expect-error TypeScript no reconoce los archivos CSS
import "swiper/css/navigation"
// @ts-expect-error TypeScript no reconoce los archivos CSS
import "swiper/css/pagination"
import "./Carousel.css"

interface CarouselProps<T> {
  items: T[]
  renderItem: (item: T, index: number) => React.ReactNode
  autoplay?: boolean
  slidesPerView?: number
}

const Carousel = <T,>({ items, renderItem, autoplay = true, slidesPerView = 1 }: CarouselProps<T>) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      pagination={{ clickable: true }}
      spaceBetween={20}
      slidesPerView={1}
      autoplay={autoplay ? { delay: 5000, disableOnInteraction: false } : false}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView }
      }}
      className='h-80 w-full lg:h-96 2xl:mt-16'
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>{renderItem(item, index)}</SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Carousel

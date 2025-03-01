import BorderGreen from "@/assets/border_green.svg"
import Numeral from "@/assets/numeral.svg"
import { Carousel } from "../Carousel"

interface Event {
  year: string
  title: string
  description: string
  details: string[]
}

const events: Event[] = [
  {
    year: "2023",
    title: "Cuadrangular de pretemporada",
    description: "Se organizo un cuadrangular en las canchas de Don Peto, con la presencia de 4 equipos de la liga:",
    details: [
      "Equipos: PGO, Almendra, Agrimensor y Celtic.",
      "Formato: Todos contra todos.",
      "Duración: 3 semanas.",
      "Campeón: Agrimensura."
    ]
  },
  {
    year: "2024",
    title: "Octagonal Febrero",
    description:
      "La organización decidió agrandar el número a 8 equipos y testear un torneo mas grande. Por primera vez se organizo en Complejo Lopez, con equipos vigentes en la B de la Liga Universitaria.",
    details: [
      "Equipos: Celtic, Agrimensor, Minaster, Taufick, Aston, Cartel, Itakua, PGO.",
      "Formato: 2 grupos de 4 equipos, clasifican 2 a semifinales.",
      "Campeón: Aston (Ascendió a la A)."
    ]
  },
  {
    year: "2024",
    title: "Octagonal Marzo",
    description:
      "Dado el éxito del octagonal anteriorse organizo un segundo torneo un mes después, pero cambiando el formato.",
    details: [
      "Equipos: Celtic, Agrimensor, Minaster, Taufick, Itakua, PGO, Cartel, Vasco de Branco.",
      "Formato: Todos contra todos.",
      "Duración: 1 mes.",
      "Campeón: Celtic (Ascendió a la A)."
    ]
  },
  {
    year: "2025",
    title: "Copa Universitaria",
    description:
      "Con a la experiencia previa de los otros torneos, se decidió organizar la Copa Universitaria para el presente año.",
    details: []
  },
  {
    year: "2026",
    title: "Copa y Liga...",
    description: "Pendiente de información.",
    details: []
  }
]

const Timeline: React.FC = () => {
  return (
    <div>
      {/* Fondo con imágenes */}
      <div className='relative flex items-center justify-center'>
        <img src={BorderGreen} className='absolute top-0 w-full max-w-[3000px]' />
        <h2 className='relative z-10 mt-20 font-edo text-3xl text-white md:mt-28 md:text-5xl lg:mt-60 lg:text-7xl'>
          Antecedentes
        </h2>
        <img src={Numeral} className='absolute -left-10 w-24 md:w-44 lg:-left-20 lg:top-16 lg:w-64' />
      </div>

      {/* Carrusel de eventos */}
      <div className='relative h-64 w-full p-5 lg:px-20'>
        <Carousel
          items={events}
          renderItem={(event) => (
            <div className='h-72 rounded-lg bg-white p-5 text-center shadow-lg lg:h-80'>
              <h3 className='text-xl font-bold'>{event.year}</h3>
              <h4 className='text-xl font-semibold italic text-[#006738]'>{event.title}</h4>
              <p className='text-sm lg:text-base'>{event.description}</p>
              {event.details.length > 0 && (
                <ul className='mt-2 list-inside list-disc text-xs lg:text-sm'>
                  {event.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          )}
          slidesPerView={3}
        />
      </div>
    </div>
  )
}

export default Timeline

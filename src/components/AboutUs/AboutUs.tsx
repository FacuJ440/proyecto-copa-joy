import BorderRose from "@/assets/border_rose.svg"
import NetBall from "@/assets/net_ball.png"

const AboutUs: React.FC = () => {
  return (
    <div className='relative'>
      <img
        className='absolute -top-20 -z-10 w-full -rotate-90 md:-top-96 lg:-top-[550px] lg:h-[2000px]'
        src={BorderRose}
      ></img>
      <img
        className='absolute -right-40 top-44 w-64 md:-right-48 md:w-96 lg:-right-80 lg:top-28 lg:w-[600px]'
        src={NetBall}
      ></img>
      <div className='mt-30 flex h-96 w-3/4 flex-col items-center gap-4 px-3 py-48 text-center text-white md:h-full md:px-6 lg:gap-10 lg:px-20 xl:py-56 2xl:px-36 2xl:py-60'>
        <h1 className='font-edo text-2xl md:text-5xl lg:text-6xl'>Sobre Nosotros</h1>
        <p className='font-openSans text-xs md:text-2xl lg:text-3xl'>
          La Copa Universitaria es mucho más que un torneo de fútbol 11, es una competencia de alto nivel, diseñada para
          elevar el estándar del fútbol universitario en San Juan. Durante 9 meses los mejores equipos universitarios de
          la provincia se enfrentarán en un campeonato serio y bien estructurado. Este torneo marcará un antes y un
          después en el fútbol amateur local, brindando a jugadores y equipos la oportunidad de crecer, competir y
          demostrar su talento, ofreciendo un espectáculo entretenido y especial para el público.
        </p>
      </div>
      <div className='mt-36 flex flex-col gap-2 px-2 md:mt-0 md:px-4 lg:mt-20 lg:px-20 2xl:mt-28 2xl:px-36'>
        <p className='text-center font-edo font-bold md:text-2xl lg:text-4xl'>Se parte de este evento unico!</p>
        <p className='text-center font-openSans text-sm md:text-2xl lg:text-3xl'>
          Queremos que tu marca nos acompañe como protagonista de algo grande, dejando huella en la historia del deporte
          en San Juan.
        </p>
      </div>
    </div>
  )
}
export default AboutUs

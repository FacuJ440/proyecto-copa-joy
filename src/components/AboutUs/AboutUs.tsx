import BorderRose from "@/assets/border_rose.svg"
import NetBall from "@/assets/net_ball.png"
import NumberOne from "@/assets/number_one.svg"
import NumberTwo from "@/assets/number_two.svg"
import NumberThree from "@/assets/number_three.svg"
import PlayerPurple from "@/assets/player_purple.svg"

const AboutUs: React.FC = () => {
  return (
    <div className='relative overflow-hidden'>
      <img
        className='absolute -top-20 -z-10 w-full -rotate-90 md:-top-96 lg:-top-[550px] lg:h-[2000px]'
        src={BorderRose}
      ></img>
      <img
        className='absolute -right-40 top-44 w-64 md:-right-48 md:w-96 lg:-right-80 lg:top-28 lg:w-[600px]'
        src={NetBall}
      ></img>
      <div
        className='mt-30 flex h-96 w-3/4 flex-col items-center gap-4 px-3 py-48 text-center text-white transition-all md:h-full md:px-6 lg:gap-10 lg:px-20 xl:py-56 2xl:px-36 2xl:py-60'
        data-aos='fade-right'
      >
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
        <p className='text-center font-edo md:text-2xl lg:text-4xl'>Se parte de este evento unico!</p>
        <p className='text-center font-openSans text-sm md:text-2xl lg:text-3xl'>
          Queremos que tu marca nos acompañe como protagonista de algo grande, dejando huella en la historia del deporte
          en San Juan.
        </p>
      </div>
      <div className='mt-8 flex gap-32 px-2 md:px-6 lg:px-20 2xl:px-40'>
        <div className='lg:w-2/3'>
          <div className='mt-4 flex items-start'>
            <img src={NumberOne} alt='1' className='h-20 w-20 md:h-28 md:w-28 lg:h-36 lg:w-36' />
            <div className='ml-4'>
              <h3 className='mb-1 font-edo md:text-2xl lg:text-4xl'>Duracion y Sede</h3>
              <p className='font-openSans text-sm md:text-xl lg:text-2xl'>
                El torneo se jugará de <span className='font-bold'>Marzo a Noviembre</span> (9 meses) y tendrá lugar en
                las canchas de <span className='font-bold'>“Complejo Lopez”</span> (Av. Libertador y Justo José de
                Urquiza J5438, Alto de Sierra, San Juan).
              </p>
            </div>
          </div>
          <div className='mt-4 flex items-start'>
            <img src={NumberTwo} alt='2' className='h-20 w-20 md:h-28 md:w-28 lg:h-36 lg:w-36' />
            <div className='ml-4'>
              <h3 className='mb-1 font-edo md:text-2xl lg:text-4xl'>Encuentros</h3>
              <p className='font-openSans text-sm md:text-xl lg:text-2xl'>
                Los partidos se jugarán <span className='font-bold'>todos los miércoles</span> de 20:30 a 00:30 hs. Se
                disputarán en 4 canchas a la vez, con un total de{" "}
                <span className='font-bold'>8 partidos por jornada</span> (32 partidos por mes, 156 partidos durante
                todo el torneo).
              </p>
            </div>
          </div>
          <div className='mt-4 flex items-start'>
            <img src={NumberThree} alt='3' className='h-20 w-20 md:h-28 md:w-28 lg:h-36 lg:w-36' />
            <div className='ml-4'>
              <h3 className='mb-1 font-edo md:text-2xl lg:text-4xl'>Participantes</h3>
              <p className='font-openSans text-sm md:text-xl lg:text-2xl'>
                En el torneo harán presencia todos los equipos de la primera división de La Liga Universitaria, más
                invitados de la categoria B y categoria C, llegando a un total de 32 equipos.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={PlayerPurple} alt='Siuuu' className='hidden w-80 lg:block' />
        </div>
      </div>
    </div>
  )
}
export default AboutUs

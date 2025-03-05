import Court from "@/assets/flag_court.png"

const Tickets: React.FC = () => {
  return (
    <div className='container mx-auto'>
      <div className='mt-4 px-4 md:mt-10 md:text-lg lg:text-2xl 2xl:text-3xl'>
        <p className=''>
          <span className='font-bold text-[#005000]'>Descripción:</span> Incluye 2 banners por cancha, uno en cada zona
          del campo de juego.
        </p>
        <p className=''>
          <span className='font-bold text-[#005000]'>Beneficios:</span> Visibilidad constante durante todos los
          partidos, frente a jugadores y espectadores.
        </p>
      </div>
      <div className='p-4 md:flex md:gap-4 lg:gap-20'>
        <div className='grid grid-cols-2 grid-rows-5 gap-2 font-bold text-white'>
          <div className='row-start-1 flex items-center justify-center rounded bg-[#006738] p-2 lg:p-2'>
            SECTORES POR CANCHA
          </div>
          <div className='row-start-1 flex items-center justify-center rounded bg-[#238742] p-2 lg:p-1'>
            2 sectores (uno por cada linea de fondo)
          </div>
          <div className='row-start-2 flex items-center justify-center rounded bg-[#006738] p-2 lg:p-1'>
            TOTAL DE CANCHAS
          </div>
          <div className='row-start-2 flex items-center justify-center rounded bg-[#238742] p-2 lg:p-1'>4 canchas</div>
          <div className='row-start-3 flex items-center justify-center rounded bg-[#006738] p-2 lg:p-1'>
            PARTIDOS POR CANCHA
          </div>
          <div className='row-start-3 flex items-center justify-center rounded bg-[#238742] p-2 lg:p-1'>
            2 partidos por jornada
          </div>
          <div className='row-start-4 flex items-center justify-center rounded bg-[#006738] p-2 lg:p-1'>
            VISIBILIDAD POR SPONSOR
          </div>
          <div className='row-start-4 flex items-center justify-center rounded bg-[#238742] p-2 lg:p-1'>
            Cada sponsor aparece en cada sector
          </div>
          <div className='row-start-5 flex items-center justify-center rounded bg-[#006738] p-2 lg:p-1'>
            EXPOSICIÓN TOTAL
          </div>
          <div className='row-start-5 flex items-center justify-center rounded bg-[#238742] p-2 lg:p-1'>
            8 sectores en cada jornada
          </div>
        </div>
        <div className=''>
          <img src={Court} alt='Campo de futbol' className='lg:h-[700px]' />
        </div>
      </div>
    </div>
  )
}

export default Tickets

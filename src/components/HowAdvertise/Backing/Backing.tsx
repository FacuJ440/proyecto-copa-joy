import BackingImage from "@/assets/backing_image.png"

const Backing: React.FC = () => {
  return (
    <div className='container mx-auto'>
      <div className='mt-4 px-4 md:mt-10 md:text-lg lg:text-2xl 2xl:text-3xl'>
        <p className=''>
          <span className='font-bold text-[#eb7a19]'>Descripción:</span> Espacio para entrevistas post-partido con
          jugadores, entrenadores y otros participantes del torneo.
        </p>
        <p className=''>
          <span className='font-bold text-[#eb7a19]'>Beneficios:</span> Visibilidad destacada en las entrevistas subidas
          a redes sociales, reforzando la presencia del sponsor.
        </p>
      </div>
      <div className='p-4 md:gap-4 lg:gap-20'>
        <div className='flex flex-col items-center justify-center gap-2'>
          <img src={BackingImage} alt='' />
          <p className='flex items-center justify-center text-base font-bold lg:text-lg'>
            Se realizaran 20 entrevistas por fecha (40 por mes), que serán publicadas en nuestras cuentas de Instagram,
            Tik Tok y Youtube.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Backing

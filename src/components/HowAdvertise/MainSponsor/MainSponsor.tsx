import SponsorImage from "@/assets/main_sponsor.png"

const MainSponsor: React.FC = () => {
  return (
    <div className='container mx-auto'>
      <div className='mt-4 px-4 md:mt-10 md:text-lg lg:text-2xl 2xl:text-3xl'>
        <p className=''>
          <span className='font-bold text-[#dd0047]'>Descripción:</span> Conviértase en el Main Sponsor del torneo de
          fútbol amateur más importante de San Juan y asegure la máxima exposición para su marca. Su empresa será la
          protagonista del evento, formando parte del nombre oficial del torneo y obteniendo presencia destacada en
          todas las comunicaciones y materiales promocionales.
        </p>
        <p className=''>
          <span className='font-bold text-[#dd0047]'>Beneficios:</span> Su marca aparecerá en el nombre oficial del
          campeonato (Ejemplo: Copa [Nombre de su empresa] Universitaria), Máxima visibilidad, Paquete publicitario
          completo: Al elegir esta categoría, su empresa obtiene todos los beneficios de las demás opciones de
          patrocinio, Exclusividad en su rubro: Su empresa será la única con este nivel de exposición dentro de su
          sector.
        </p>
      </div>
      <div className='p-4 md:gap-4 lg:gap-20'>
        <div className='flex flex-col items-center justify-center gap-2'>
          <img src={SponsorImage} alt='' />
          {/* <p className='flex items-center justify-center text-base lg:text-lg'>
            *La imagen de la camiseta es a modo de ejemplo
          </p> */}
        </div>
      </div>
    </div>
  )
}

export default MainSponsor

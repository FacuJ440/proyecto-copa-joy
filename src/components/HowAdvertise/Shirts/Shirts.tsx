import ShirtsImage from "@/assets/imagen_camisetas.png"

const Shirts: React.FC = () => {
  return (
    <div className='container mx-auto'>
      <div className='mt-4 px-4 md:mt-10 md:text-lg lg:text-2xl 2xl:text-3xl'>
        <p className=''>
          <span className='font-bold text-[#2f0b62]'>Descripción:</span> Espacio publicitario para el logo de las marcas
          en las camisetas del STAFF, conformado por (numero) personas.
        </p>
        <p className=''>
          <span className='font-bold text-[#2f0b62]'>Beneficios:</span> Visibilidad constante dentro del complejo, mayor
          importancia al ser parte de la vestimenta de los organizadores .
        </p>
      </div>
      <div className='p-4 md:gap-4 lg:gap-20'>
        <div className='flex flex-col items-center justify-center gap-2'>
          <img src={ShirtsImage} alt='' />
          <p className='flex items-center justify-center text-base lg:text-lg'>
            *La imagen de la camiseta es a modo de ejemplo
          </p>
        </div>
      </div>
    </div>
  )
}

export default Shirts

import EjemploTicket from "@/assets/ejemplo_ticket.png"

const Tickets: React.FC = () => {
  return (
    <div className='container mx-auto'>
      <div className='mt-4 px-4 md:mt-10 md:text-lg lg:text-2xl 2xl:text-3xl'>
        <p className=''>
          <span className='font-bold text-[#004aad]'>Descripción:</span> El logo del sponsor aparecerá en las entradas
          físicas impresas.
        </p>
        <p className=''>
          <span className='font-bold text-[#004aad]'>Beneficios:</span> Presencia destacada en todos los partidos,
          visible tanto para el staff como para los asistentes.
        </p>
      </div>
      <div className='flex flex-col gap-20 font-bold md:flex-row'>
        <div className='flexitems-center justify-center gap-2'>
          <img src={EjemploTicket} alt='' />
          <p className='flex items-center justify-center text-base lg:text-lg'>
            *La imagen de la entrada es a modo de ejemplo.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Tickets

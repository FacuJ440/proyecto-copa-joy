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
    description: "Se organizó un cuadrangular en las canchas de Don Pedro, con equipos de la B local.",
    details: [
      "Equipos: PGO, Almendra, Agrimensor y Celtic.",
      "Formato: Todos contra todos.",
      "Duración: 3 semanas.",
      "Campeón: Agrimensor."
    ]
  },
  {
    year: "2024",
    title: "Octagonal Febrero",
    description: "Se amplió el número de equipos y el torneo se trasladó a Complejo López.",
    details: [
      "Equipos: Celtic, Agrimensor, Minaster, Taufick, Aston, Cartel, Itakua, PGO.",
      "Formato: 2 grupos de 4 equipos, clasifican 2 a semifinales.",
      "Campeón: Aston (Ascendió a la A)."
    ]
  },
  {
    year: "2024",
    title: "Octagonal Marzo",
    description: "Dado el éxito del torneo anterior, se organizó un segundo torneo con el mismo formato.",
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
    description: "Con la experiencia previa, se organiza la 1° Copa Universitaria.",
    details: []
  },
  {
    year: "2026",
    title: "Copa y Liga...",
    description: "Próximamente",
    details: []
  }
]

const Timeline: React.FC = () => {
  return (
    <div className='relative w-full'>
      {/* Línea del tiempo */}
      <div className='absolute left-0 top-3 w-full border-t-4 border-dashed border-green-600'></div>

      {/* Eventos */}
      <div className='mt-4 flex items-start justify-between'>
        {events.map((event, index) => (
          <div key={index} className='relative w-1/5 text-center'>
            {/* Punto en la línea */}
            <div className='relative mx-auto mb-2 h-6 w-6 rounded-full bg-black'></div>
            {/* Año */}
            <h3 className='text-lg font-bold'>{event.year}</h3>
            {/* Tarjeta de información */}
            <div className='mt-2 rounded-lg bg-white p-3 font-openSans shadow-lg'>
              <h4 className='font-semibold italic'>{event.title}</h4>
              <p className='text-sm'>{event.description}</p>
              {event.details.length > 0 && (
                <ul className='mt-2 list-inside list-disc text-xs'>
                  {event.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Timeline

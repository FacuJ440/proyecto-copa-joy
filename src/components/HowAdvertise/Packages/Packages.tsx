import CardPackages from "@/assets/card_packages.png"

const Packages: React.FC = () => {
  return (
    <div className='container mx-auto'>
      <div className='flex flex-col items-center gap-10 lg:mt-20'>
        <div className='grid w-full max-w-5xl grid-cols-1 place-items-center gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
          <div
            className='relative flex h-96 w-full items-center justify-center bg-contain bg-center bg-no-repeat p-6'
            style={{ backgroundImage: `url(${CardPackages})` }}
          >
            <div className='relative max-w-xs rounded-md bg-transparent p-6 text-white shadow-lg'>
              <h2 className='text-center font-edo text-xl'>Paquete Premium</h2>
              <h3 className='text-center font-edo text-lg'>Total</h3>

              <ul className='mt-4 list-inside list-disc text-sm'>
                <li>Banners Publicitarios en Canchas</li>
                <li>Redes Sociales</li>
                <li>Backing</li>
                <li>Camisetas del Staff y Publicidad en Entradas</li>
              </ul>
            </div>
          </div>
          <div
            className='relative flex h-96 w-full items-center justify-center bg-contain bg-center bg-no-repeat p-6'
            style={{ backgroundImage: `url(${CardPackages})` }}
          >
            <div className='relative max-w-xs rounded-md bg-transparent p-6 text-white shadow-lg'>
              <h2 className='text-center font-edo text-xl'>Paquete Premium</h2>
              <h3 className='text-center font-edo text-lg'>Total</h3>

              <ul className='mt-4 list-inside list-disc text-sm'>
                <li>Banners Publicitarios en Canchas</li>
                <li>Redes Sociales</li>
                <li>Backing</li>
                <li>Camisetas del Staff y Publicidad en Entradas</li>
              </ul>
            </div>
          </div>
          <div className='flex w-full justify-center md:col-span-2 lg:col-span-1'>
            <div
              className='relative flex h-96 w-full items-center justify-center bg-contain bg-center bg-no-repeat p-6'
              style={{ backgroundImage: `url(${CardPackages})` }}
            >
              <div className='relative max-w-xs rounded-md bg-transparent p-6 text-white shadow-lg'>
                <h2 className='text-center font-edo text-xl'>Paquete Premium</h2>
                <h3 className='text-center font-edo text-lg'>Total</h3>

                <ul className='mt-4 list-inside list-disc text-sm'>
                  <li>Banners Publicitarios en Canchas</li>
                  <li>Redes Sociales</li>
                  <li>Backing</li>
                  <li>Camisetas del Staff y Publicidad en Entradas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='grid w-full max-w-5xl grid-cols-1 place-items-center gap-10 sm:grid-cols-2'>
          <div
            className='relative flex h-96 w-full items-center justify-center bg-contain bg-center bg-no-repeat p-6'
            style={{ backgroundImage: `url(${CardPackages})` }}
          >
            <div className='relative max-w-xs rounded-md bg-transparent p-6 text-white shadow-lg'>
              <h2 className='text-center font-edo text-xl'>Paquete Premium</h2>
              <h3 className='text-center font-edo text-lg'>Total</h3>

              <ul className='mt-4 list-inside list-disc text-sm'>
                <li>Banners Publicitarios en Canchas</li>
                <li>Redes Sociales</li>
                <li>Backing</li>
                <li>Camisetas del Staff y Publicidad en Entradas</li>
              </ul>
            </div>
          </div>
          <div
            className='relative flex h-96 w-full items-center justify-center bg-contain bg-center bg-no-repeat p-6'
            style={{ backgroundImage: `url(${CardPackages})` }}
          >
            <div className='relative max-w-xs rounded-md bg-transparent p-6 text-white shadow-lg'>
              <h2 className='text-center font-edo text-xl'>Paquete Premium</h2>
              <h3 className='text-center font-edo text-lg'>Total</h3>

              <ul className='mt-4 list-inside list-disc text-sm'>
                <li>Banners Publicitarios en Canchas</li>
                <li>Redes Sociales</li>
                <li>Backing</li>
                <li>Camisetas del Staff y Publicidad en Entradas</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Packages

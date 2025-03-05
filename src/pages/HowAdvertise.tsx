import { Backing } from "@/components/HowAdvertise/Backing"
import { Flag } from "@/components/HowAdvertise/Flag"
import { MainSponsor } from "@/components/HowAdvertise/MainSponsor"
import { Packages } from "@/components/HowAdvertise/Packages"
import { Shirts } from "@/components/HowAdvertise/Shirts"
import { Social } from "@/components/HowAdvertise/Social"
import { Tickets } from "@/components/HowAdvertise/Tickets"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs"

const HowAdvertise = () => {
  return (
    <div className=''>
      <Tabs defaultValue='account' className='w-full'>
        <TabsList className='space-x-2 space-y-2 bg-slate-300 px-4 py-4 font-edo lg:flex lg:flex-row lg:justify-center lg:gap-4 lg:space-x-0 lg:space-y-0'>
          <TabsTrigger value='bandera'>
            <Button className='bg-[#006738] lg:w-44'>Bandera Publicitaria</Button>
          </TabsTrigger>
          <TabsTrigger value='redes'>
            <Button className='bg-[#91007b] lg:w-44'>Redes Sociales</Button>
          </TabsTrigger>
          <TabsTrigger value='entradas'>
            <Button className='bg-[#0769b2] lg:w-44'>Entradas</Button>
          </TabsTrigger>
          <TabsTrigger value='backing'>
            <Button className='bg-[#eb7a19] lg:w-44'>Backing</Button>
          </TabsTrigger>
          <TabsTrigger value='camisetas'>
            <Button className='bg-[#2f0b62] lg:w-44'>Camisetas</Button>
          </TabsTrigger>
          <TabsTrigger value='main'>
            <Button className='bg-[#dd0047] lg:w-44'>Main Sponsor</Button>
          </TabsTrigger>
          <TabsTrigger value='paquetes'>
            <Button className='bg-black lg:w-44'>Paquetes</Button>
          </TabsTrigger>
        </TabsList>
        <TabsContent value='bandera'>
          <Flag />
        </TabsContent>
        <TabsContent value='redes'>
          <Social />
        </TabsContent>
        <TabsContent value='entradas'>
          <Tickets />
        </TabsContent>
        <TabsContent value='backing'>
          <Backing />
        </TabsContent>
        <TabsContent value='camisetas'>
          <Shirts />
        </TabsContent>
        <TabsContent value='main'>
          <MainSponsor />
        </TabsContent>
        <TabsContent value='paquetes'>
          <Packages />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default HowAdvertise

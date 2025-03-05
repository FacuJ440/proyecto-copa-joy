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
    <div>
      <Tabs defaultValue='account' className='w-[400px]'>
        <TabsList>
          <TabsTrigger value='bandera'>
            <Button>Bandera Publicitaria</Button>
          </TabsTrigger>
          <TabsTrigger value='redes'>
            <Button>Redes Sociales</Button>
          </TabsTrigger>
          <TabsTrigger value='entradas'>
            <Button>Entradas</Button>
          </TabsTrigger>
          <TabsTrigger value='backing'>
            <Button>Backing</Button>
          </TabsTrigger>
          <TabsTrigger value='camisetas'>
            <Button>Camisetas</Button>
          </TabsTrigger>
          <TabsTrigger value='main'>
            <Button>Main Sponsor</Button>
          </TabsTrigger>
          <TabsTrigger value='paquetes'>
            <Button>Paquetes</Button>
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

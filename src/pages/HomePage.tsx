import React from "react"
import { Button } from "../components/ui/button"
import { Toaster } from "../components/ui/toaster"
import { useToast } from "@/hooks/use-toast"

const HomePage: React.FC = () => {
  const { toast } = useToast()

  const handleClick = () => {
    toast({
      title: "Hola",
      description: "Esto es una notificación"
    })
  }

  return (
    <div className='flex h-screen flex-col items-center justify-center space-y-2'>
      <div>
        <h1>Bienvenido a React Project Structure</h1>
        <Button onClick={handleClick} className='w-full'>
          Click Me
        </Button>
      </div>
      <Toaster />
    </div>
  )
}

export default HomePage

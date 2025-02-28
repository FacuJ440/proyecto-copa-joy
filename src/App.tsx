import React, { useEffect } from "react"
import { AppRouter } from "@/routes/AppRouter"
import AOS from "aos"
import "aos/dist/aos.css"

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      once: false
    })
  })
  return (
    <div className='App overflow-hidden font-openSans'>
      <AppRouter />
    </div>
  )
}

export default App

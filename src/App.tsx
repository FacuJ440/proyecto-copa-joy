import React from "react"
import { AppRouter } from "@/routes/AppRouter"

const App: React.FC = () => {
  return (
    <div className='App font-openSans overflow-hidden'>
      <AppRouter />
    </div>
  )
}

export default App

import React from "react"
import { AppRouter } from "@/routes/AppRouter"

const App: React.FC = () => {
  return (
    <div className='App overflow-hidden'>
      <AppRouter />
    </div>
  )
}

export default App

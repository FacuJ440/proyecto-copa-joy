import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router"
import HomePage from "../../pages/HomePage"
import HowAdvertise from "@/pages/HowAdvertise"
import Layout from "@/components/layout/Layout"
import { ScrollToTop } from "@/components/ScrollToTop"

const AppRouter: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='como-publicitar' element={<HowAdvertise />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRouter

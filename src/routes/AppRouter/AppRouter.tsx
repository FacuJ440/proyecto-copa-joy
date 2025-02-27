import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router"
import HomePage from "../../pages/HomePage"
import PostsPage from "../../features/posts/PostsPage"
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute"

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/posts' element={<PostsPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRouter

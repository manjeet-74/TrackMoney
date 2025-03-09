import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import Login from "./pages/Login"


function App() {

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Routes>
        <Route path="/" element={<Home />} />"
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path="/register" element={<h1>Register</h1>} />
      </Routes>
    </div>
  )
}

export default App

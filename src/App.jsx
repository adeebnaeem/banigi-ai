import { Route, Routes } from "react-router-dom"
import Home from "./Home/Home"
import Footer from "./layout/Footer"
import Header from "./layout/Header"
import Dashboard from "./pages/dashboard/Dashboard"
import Page from "./pages/dashboard/dashboardPages/Page"
import Page2 from "./pages/dashboard/dashboardPages/Page2"


function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/dashboard" element={<Dashboard />} >
          <Route path="/dashboard/page" element={<Page />} />
          <Route path="/dashboard/page2" element={<Page2 />} />
        </Route>

      </Routes>


    </>
  )
}

export default App

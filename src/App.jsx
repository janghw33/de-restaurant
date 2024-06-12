import './App.css'
import Contract from './components/Contract'
import Nav from './components/Nav'
import { Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage'
import MenuPage from './pages/MenuPage'


function App() {
  return (
    <>
      <Contract/>
      <Nav/>
      <Routes>
        <Route path="/">
          <Route index element={<LandingPage />} />
          <Route path="menu" element={<MenuPage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App

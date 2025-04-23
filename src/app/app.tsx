import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import Sidebar from './components/Sidebar/Sidebar'
import { Cursor } from './components/Cursor'
import About from './pages/about'
import Contact from './pages/contact'
import CSV from './pages/csv'
import MauaFood from './pages/projects/mauafood'
import SmartFarm from './pages/projects/smartfarm'
import Portfolios from './pages/projects/portfolios'
import Smile from './pages/projects/smile'

export function App() {
  return (
    <>
      <Router>
        <Cursor />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/csv" element={<CSV />} />
          <Route path="/smile" element={<Smile />} />
          <Route path="/mauafood" element={<MauaFood />} />
          <Route path="/smartfarm" element={<SmartFarm/>} />
          <Route path="/portfolios" element={<Portfolios/>} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Router>
    </>
  )
}

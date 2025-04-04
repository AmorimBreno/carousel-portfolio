import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import Sidebar from './components/Sidebar/Sidebar'

export function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Router>
    </>
  )
}

import { Routes, Route } from 'react-router-dom'
import { lazy } from 'react'
const Home = lazy(() => import('./pages/Home'))

function App() {
  return (
    <Routes>
      <Route path='/portfolio' element={<Home />} />
    </Routes>
  )
}

export default App

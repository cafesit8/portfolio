import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Home from './pages/Home'
import Loading from './fallbacks/Projects.loading'
const Projects = lazy(() => import('./pages/Projects'))
const Experience = lazy(() => import('./pages/Experience'))

function App () {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/projects' element={<Suspense fallback={<Loading />}>
        <Projects/>
      </Suspense>}>
      </Route>
      <Route path='/experience' element={<Suspense fallback={<Loading />}>
        <Experience />
      </Suspense>}>
      </Route>
    </Routes>
  )
}

export default App

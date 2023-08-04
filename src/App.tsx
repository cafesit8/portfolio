import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Home from './pages/Home'
import ProjectsLoading from './fallbacks/Projects.loading'
const Projects = lazy(() => import('./pages/Projects'))

function App () {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/projects' element={<Suspense fallback={<ProjectsLoading />}>
        <Projects/>
      </Suspense>}>
      </Route>
    </Routes>
  )
}

export default App

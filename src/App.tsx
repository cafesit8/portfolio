import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Home from './pages/Home'
import ProjectsLoading from './fallbacks/Projects.loading'
import CardsLoading from './fallbacks/Cards.loading'
const Projects = lazy(() => import('./pages/Projects'))
const React = lazy(() => import('./pages/React'))
const NextJs = lazy(() => import('./pages/NextJs'))
const Js = lazy(() => import('./pages/Js'))
const Vue = lazy(() => import('./pages/Vue'))

function App () {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/projects' element={<Suspense fallback={<ProjectsLoading />}>
        <Projects/>
      </Suspense>}>
        <Route path='React' element={<Suspense fallback={<CardsLoading />}>
          <React />
        </Suspense>} />
        <Route path='NextJs' element={<Suspense fallback={<CardsLoading />}>
          <NextJs />
        </Suspense>} />
        <Route path='Js' element={<Suspense fallback={<CardsLoading />}>
          <Js />
        </Suspense>} />
        <Route path='Vue' element={<Suspense fallback={<CardsLoading />}>
          <Vue />
        </Suspense>} />
      </Route>
    </Routes>
  )
}

export default App

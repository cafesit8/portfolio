import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
const Home = lazy(() => import('./pages/Home'))
const Projects = lazy(() => import('./pages/Projects'))
const React = lazy(() => import('./pages/React'))
const NextJs = lazy(() => import('./pages/NextJs'))
const Js = lazy(() => import('./pages/Js'))
const Vue = lazy(() => import('./pages/Vue'))

function App () {
  return (
    <Suspense fallback={<main className='bg-bluebg w-full h-screen'>Loading...</main>}>
      <Routes>
        <Route path='/portfolio' element={<Home />} />
        <Route element={<Projects />}>
          <Route path='/portfolio/projects/React' element={<React />} />
          <Route path='/portfolio/projects/NextJs' element={<NextJs />} />
          <Route path='/portfolio/projects/Js' element={<Js />} />
          <Route path='/portfolio/projects/Vue' element={<Vue />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App

import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Loader from './utils/Loader'
import ErrorBoundry from './utils/ErrorBoundry'
const Home = lazy(() => import('./pages/Home/Home'))
function App() {
  return (

    <>
      <ErrorBoundry >
        <Suspense fallback={<div className='flex h-screen justify-center items-center'><Loader /></div>}>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Suspense>
      </ErrorBoundry>
    </>
  )
}


export default App

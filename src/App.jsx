import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Logement from './pages/Logement'
import About from './pages/About'
import Error from './pages/Error'
import Layout from './components/Layout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} /> 
      <Route path="/logement/:id" element={<Logement />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<Error />} /> {/*Wildcard route * for errors*/}
    </Route>
  )
)

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App

import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import Layout from './components/Layout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} /> 
      {/*insérer ici la page Property qui s'ouvre lorsqu'on clique sur un des logements de Home*/}
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

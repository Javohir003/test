
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import NavbarLayout from './Layout/NavbarLayout'
import About from "./Pages/About/About"
import Home from "./Pages/Home/Home"
import ProductAll from './components/Product/ProductAll'
import ProductDetail from './components/ProductDetail/ProductDetail'

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <NavbarLayout/>,
      children: [
        {
          path: "/home",
          element: <Home/>
        },
        {
          path: "/about",
          element: <About/>,
          children: [
            {
              index: true,
              element: <ProductAll/>
            },
            {
              path: "product/:id",
              element: <ProductDetail/>
            },
            {
              path: "*",
              element: <h1>Sizda Children Not Found ishladi</h1>
            }
          ]
        }
      ]
    },
    {
      path: "*",
      element: <h1>Sizda Katta Not Found ishladi</h1>
    }
  ])


  return (
    // <div className='container grid animate-bounce hover:bg-black transition-all duration-300 cursor-pointer lg:shadow-lg lg:shadow-red-700 llg:bg-orange-700 xl:bg-green-600 llg xl:text-yellow-500 md:text-blue-700 md:bg-pink-400 sm:bg-sky-500 bg-black text-white'>
    //   <h1 className='text-[50px] text-white font-black'>Hello World</h1>
    // </div>
    <div>
      <RouterProvider router={routes} />
    </div>
  )
}

export default App

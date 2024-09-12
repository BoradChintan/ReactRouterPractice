import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Body/Home';
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom';
import About from './Components/Body/About';
import Contact from './Components/Body/Contact';
import Login from './Components/Authentication/Login';
import { useState } from 'react';

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}


const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
    </Route>
  ))

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false)

  const handleLoggin = () => {
    setLoggedIn(true)
  }

  const handleLogout = () => {
    setLoggedIn(false)
  }

  return (

    isLoggedIn ? (
      < RouterProvider router={route} />
    ) : (
      <Login onLogin={handleLoggin} />
    )
  )
}


export default App;

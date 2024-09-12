// import './App.css';
// import Header from './Components/Header/Header';
// import Footer from './Components/Footer/Footer';
// import Home from './Components/Body/Home';
// import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom';
// import About from './Components/Body/About';
// import Contact from './Components/Body/Contact';
// import Login from './Components/Authentication/Login';
// import { useState } from 'react';
// import GlobalSpinner from './Components/GlobalSpinner'
// import { useNavigation } from 'react-router-dom';

// export const Layout = () => {
//   return (
//     <>
//       <Header />
//       <main>
//         <Outlet />
//       </main>
//       <Footer />
//     </>
//   )
// }


// const route = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//       <Route index element={<Home />} />
//       <Route path='about' element={<About />} />
//       <Route path='contact' element={<Contact />} />
//     </Route>
//   ))



// function App() {
//   const navigation = useNavigation()
//   const [isLoggedIn, setLoggedIn] = useState(false)

//   const handleLoggin = () => {
//     setLoggedIn(true)
//   }

//   const handleLogout = () => {
//     setLoggedIn(false)
//   }

//   return (
//     <>
//       {navigation.state === "loading" && <GlobalSpinner />}
//       {
//         isLoggedIn ? (
//           <RouterProvider router={route} />
//         ) : (
//           <Login onLogin={handleLoggin} />
//         )
//       }
//     </>
//   );
// }


// export default App;
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Body/Home';
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider, useNavigation } from 'react-router-dom';
import About from './Components/Body/About';
import Contact from './Components/Body/Contact';
import Login from './Components/Authentication/Login';
import { useState } from 'react';
import GlobalSpinner from './Components/GlobalSpinner'
// import GlobalSpinner from './Components/GlobalSpinner';

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

// This needs to wrap all routes where you want to use react-router hooks like useNavigation
const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <RouterProvider router={route}>
      {/* Now you can use navigation here */}
      <AppContent isLoggedIn={isLoggedIn} onLogin={handleLogin} />
    </RouterProvider>
  );
}

// Extract the component that uses navigation inside the router context
function AppContent({ isLoggedIn, onLogin }) {
  const navigation = useNavigation();

  console.log(navigation);
  console.log(navigation.state);

  return (
    <>

      {navigation.state === 'loading' && <GlobalSpinner />}
      {isLoggedIn ? (
        <Outlet /> // Render the appropriate component via Outlet when logged in
      ) : (
        <Login onLogin={onLogin} />
      )}

    </>
  );
}
export default App;

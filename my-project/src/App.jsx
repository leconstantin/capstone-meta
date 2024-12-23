// import Header from "./components/Header";
// import Nav from "./components/Nav";
// import Main from "./components/Main";
// import Footer from "./components/Footer";
// export default function App() {
//   return (
//     <>
//       <div className="flex justify-between items-center px-4 py-2 shadow-md">
//         <Header />
//         <Nav />
//       </div>

//       <Main />
//       <Footer />
//     </>
//   );
// }

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./layout/AppLayout";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Services from "./pages/Services";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import ConfirmPage from "./pages/ConfirmPage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/booking",
        element: <Booking />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/booking",
        element: <Booking />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/confirmation-page",
        element: <ConfirmPage />,
      },
    ],
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}

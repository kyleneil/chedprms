import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Loginpage from './page/Loginpage/page.jsx'
import Navbar from './components/Navbar/page.jsx';
import Footer from './components/Footer/page.jsx';
import Homepage from './page/Homepage/page.jsx';
import PromotionalPage from './page/PromotionalPage/page.jsx';
import Accountpage from './page/Accountpage/page.jsx';
import Schoolpage from './page/Schoolpage/page.jsx';
import HEIpage from './page/HEIpage/page.jsx';
import StudentDetailpage from './page/StudentDetailpage/page.jsx';

function App() {

  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div className='min-h-screen overflow-auto bg-gray-100'>
          <Outlet />
        </div>
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Loginpage />,
    },
    {
      path: "/admin",
      element: <Layout />,
      children: [
        // {
        //   path: "home",
        //   element: <Homepage />
        // },
        {
          path: "promotional",
          element: <PromotionalPage />
        },
        {
          path: "school",
          element: <Schoolpage />
        },
        {
          path: "account",
          element: <Accountpage />
        },
        {
          path: "studentdetail",
          element: <StudentDetailpage />
        }
      ]
    },
    {
      path: "/hei",
      element: <HEIpage />
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>

  )
}

export default App

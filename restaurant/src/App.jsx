import { Navigate, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import Home from './pages/home/Home'
import Navbar from './components/Navbar/Navbar'
import OrderDetail from './pages/Order/OrderDetail'
import OrderList from './pages/Order/OrderList'
import CustomerDetail from './pages/customer/CustomerDetail'
import Customer from './pages/customer/Customer'
import Review from './pages/Review/Review'
import Foods from './pages/Foods/Foods'
import FoodDetails from './pages/Foods/FoodDetails'
import Login from './pages/Accounts/Login'
import Register from './pages/Accounts/Register'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { loadUser } from './redux/User/userAction'
import store from './redux/store'
import { loadRestaurant } from './redux/restaurant/restaurantAction'
import axios from 'axios';
import AddFood from './pages/Foods/AddFood';
axios.defaults.withCredentials = true
function App() {
  useEffect(() => {
    store.dispatch(loadUser())
    store.dispatch(loadRestaurant())
  }, [])

  const Layout = () => {
    return (
      <div className='app'>
        <div className="left-sidebar">
          <Sidebar />
        </div>
        <div className="right-sidebar">
          <Navbar />
          <Outlet />
        </div>
      </div>
    )
  }


  const { isAuthenticated, currentUser } = useSelector(state => state.user)
  // const { restaurant } = useSelector(state => state.restaurant)

  const toastOptions = {
    success: {
      iconTheme: {
        primary: "#00af74",
        secondary: "white",
      }
    },
    error: {
      iconTheme: {
        primary: "red",
        secondary: "white",
      }
    },
    style: {
      fontSize: '.9rem'
    }
  }
  const router = createBrowserRouter([
    {
      path: '/',
      element: isAuthenticated && currentUser.role === 'owner' ? <Layout /> : <Login />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/OrderList', element: <OrderList /> },
        { path: '/OrderDetail', element: <OrderDetail /> },
        { path: '/customer', element: <Customer /> },
        { path: '/customerDetail', element: <CustomerDetail /> },
        { path: '/analytics', element: <OrderDetail /> },
        { path: '/review', element: <Review /> },
        { path: '/foods', element: <Foods /> },
        { path: '/addfood', element: <AddFood /> },
        { path: '/foodDetail', element: <FoodDetails /> },
        { path: '/calendar', element: <OrderDetail /> },
        { path: '/chart', element: <OrderDetail /> },
        { path: '/wallet', element: <OrderDetail /> },
      ],
    },
    {
      path: '/login',
      element: isAuthenticated ? <Navigate to="/" replace /> : <Login />,
    },
    {
      path: '/Register',
      element: isAuthenticated ? <Navigate to="/" replace /> : <Register />
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster toastOptions={toastOptions} />
    </>
  )
}

export default App

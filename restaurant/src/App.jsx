import { Route, Routes } from 'react-router-dom'
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
function App() {

  return (
    <>
      <div className="app">
        <div className="left-sidebar">
          <Sidebar />
        </div>
        <div className="right-sidebar">
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/OrderList' element={<OrderList />} />
            <Route path='/OrderDetail' element={<OrderDetail />} />
            <Route path='/customer' element={<Customer />} />
            <Route path='/customerDetail' element={<CustomerDetail />} />
            <Route path='/analytics' element={<OrderDetail />} />
            <Route path='/review' element={<Review />} />
            <Route path='/foods' element={<Foods />} />
            <Route path='/foodDetail' element={<FoodDetails />} />
            <Route path='/calendar' element={<OrderDetail />} />
            <Route path='/chart' element={<OrderDetail />} />
            <Route path='/wallet' element={<OrderDetail />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App

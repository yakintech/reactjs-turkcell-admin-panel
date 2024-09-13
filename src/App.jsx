import React, { useEffect } from 'react'
import Navbar from './components/layout-components/Navbar'
import Footer from './components/layout-components/Footer'
import { Route, Routes } from 'react-router-dom'
import ProductRoutes from './pages/product'
import { Container } from '@mui/material'
import CategoryRoutes from './pages/category'
import SupplierRoutes from './pages/supplier'
import CustomerRoutes from './pages/customer'
import FilmSearch from './pages/films/FilmSearch'
import Home from './pages/home/Home'
import MemoParent from './pages/memo/MemoParent'
import CounterSample from './pages/counter/CounterSample'
import { fetchOrders } from './store/OrderSlice'
import { useDispatch } from 'react-redux'
import OrderList from './pages/orders/OrderList'

function App() {

  let dispatch = useDispatch()

  useEffect(() => {
    
    dispatch(fetchOrders())
    
  }, [])
  

  return <>
    <Navbar />
    <Container style={{ marginTop: 30 }}>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products/*' element={<ProductRoutes />} />
        <Route path='/categories/*' element={<CategoryRoutes />} />
        <Route path='/suppliers/*' element={<SupplierRoutes />} />
        <Route path='/customers/*' element={<CustomerRoutes/>} />
        <Route path='/films' element={<FilmSearch/>} />
        <Route path='/memoSample' element={<MemoParent/>} />
        <Route path='/counterSample' element={<CounterSample/>} />
        <Route path='/orders' element={<OrderList/>} />
      </Routes>
    </Container>

    <Footer />
  </>
}

export default App
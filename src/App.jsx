import React from 'react'
import Navbar from './components/layout-components/Navbar'
import Footer from './components/layout-components/Footer'
import { Route, Routes } from 'react-router-dom'
import ProductRoutes from './pages/product'
import { Container } from '@mui/material'
import CategoryRoutes from './pages/category'
import SupplierRoutes from './pages/supplier'
import CustomerRoutes from './pages/customer'

function App() {

  return <>
    <Navbar />
    <Container style={{ marginTop: 30 }}>
      <Routes>
        <Route path='/products/*' element={<ProductRoutes />} />
        <Route path='/categories/*' element={<CategoryRoutes />} />
        <Route path='/suppliers/*' element={<SupplierRoutes />} />
        <Route path='/customers/*' element={<CustomerRoutes/>} />
      </Routes>
    </Container>

    <Footer />
  </>
}

export default App
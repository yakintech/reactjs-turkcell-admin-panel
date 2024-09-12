import React from 'react'
import Navbar from './components/layout-components/Navbar'
import Footer from './components/layout-components/Footer'
import { Route, Routes } from 'react-router-dom'
import ProductRoutes from './pages/product'
import { Container } from '@mui/material'

function App() {

  return <>
    <Navbar />
    <Container style={{ marginTop: 30 }}>
      <Routes>
        <Route path='/products/*' element={<ProductRoutes />} />
      </Routes>
    </Container>

    <Footer />
  </>
}

export default App
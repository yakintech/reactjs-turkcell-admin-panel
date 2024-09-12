import React from 'react'
import { Route, Routes } from 'react-router-dom'
import List from './List'
import Add from './Add'
import Detail from './Detail'

function ProductRoutes() {
  return <>
        <Routes>
            <Route path='/' element={<List/>} />
            <Route path='/add' element={<Add/>}/>
            <Route path='/:id' element={<Detail/>}/>
        </Routes>
  </>
}

export default ProductRoutes
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import List from './List'
import Add from './Add'
import Detail from './Detail'
import Favorites from './Favorites'

function ProductRoutes() {
  return <>
        <Routes>
            <Route path='/' element={<List/>} />
            <Route path='/add' element={<Add/>}/>
            <Route path='/:id' element={<Detail/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
        </Routes>
  </>
}

export default ProductRoutes
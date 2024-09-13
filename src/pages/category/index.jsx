import React from 'react'
import { Route, Routes } from 'react-router-dom'
import List from './List'
import Add from './Add'

function CategoryRoutes() {
  return <>
    <Routes>
        <Route path='/' element={<List/>}/>
        <Route path='/add' element={<Add/>} />
    </Routes>
  </>
}

export default CategoryRoutes
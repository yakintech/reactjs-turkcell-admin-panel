import React from 'react'
import { Route, Routes } from 'react-router-dom'
import List from './List'

function CustomerRoutes() {
  return <>
        <Routes>
            <Route path='/' element={<List/>} />
        </Routes>
  </>
}

export default CustomerRoutes
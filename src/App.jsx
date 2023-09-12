import React from 'react'
import Product_Add from './component/Product_Add/Product_Add'
import Product_View from './component/Product_View/Product_View'
import { Route, Routes } from 'react-router'

function App() {
  return (
    <>
      {/* <Product_Add />
    <Product_View /> */}
      <Routes>
        <Route path='/' element={<Product_Add />} />
        <Route path='/view' element={<Product_View />} />
      </Routes>
    </>
  )
}

export default App
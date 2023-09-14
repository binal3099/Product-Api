import React from 'react'
import Product_Add from './component/Product_Add/Product_Add'
import Product_View from './component/Product_View/Product_View'
import { Route, Routes } from 'react-router'
import Product_edit from './component/Product_Edit/Product_edit'

function App() {
  return (
    <>
      {/* <Product_Add />
    <Product_View /> */}
      <Routes>
        <Route path='/' element={<Product_Add />} />
        <Route path='/view' element={<Product_View />} />
        <Route path='/edit/:id' element={<Product_edit />} />
      </Routes>
    </>
  )
}

export default App
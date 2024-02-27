import React from 'react'
import Nav from './Components/Nav'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Edit from './Components/Edit'
import Add from './Components/Add'
import View from './Components/View'
const App = () => {
  
  return (
    <>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route element={<View/>} path='/'/>
        <Route element={<Add/>} path='/add'/>
        <Route element={<Edit/>} path='/edit/:id'/>
      </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
import React from 'react'
import Service from './page/Service'
import Home from './page/Home'
import About from './page/About'
import Contact from './page/Contact'
import { BrowserRouter,Routes,Route } from 'react-router'

const App=()=> {
  return (
    <>
      <BrowserRouter>
      <Routes>
    
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Service' element={<Service/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;

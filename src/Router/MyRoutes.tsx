import React from 'react'
import { Routes, Route, BrowserRouter, NavLink } from 'react-router-dom'
import { Inicio } from '../Components/Inicio'
import { Portfolio } from '../Components/Portfolio'
import { Servicios } from '../Components/Servicios'
import { CV } from '../Components/CV'
import { Contact } from '../Components/Contact'

export const MyRoutes = () => {
  return (
    <div>
        <BrowserRouter>
            {/*   HEADER AND NAVIGATION */}
            {/*   MAIN CONTENT */}
<Routes>
    <Route path='/' element={<Inicio/>}></Route>
    <Route path='/Inicio' element={<Inicio/>}></Route>
    <Route path='/portfolio' element={<Portfolio/>}></Route>
    <Route path='/servicios' element={<Servicios/>}></Route>
    <Route path='/CV' element={<CV/>}></Route>
    <Route path='/Contact' element={<Contact/>}></Route>



</Routes>
            {/*   FOOTER  */}

        
        </BrowserRouter>
    </div>
  )
}

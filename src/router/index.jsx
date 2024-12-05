import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../pages/Layout/Layout'
import Home from '../pages/Home/Home'
import Sessions from '../pages/Sessions/Sessions'
import Tickets from '../pages/Tickets/Tickets'
import Categories from '../pages/Categories/Categories'
import Detail from '../components/Detail'

const Router = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path='/' element={<Home/>}/>
                <Route path='/sessions' element={<Sessions/>}/>
                <Route path='/tickets' element={<Tickets/>}/>
                <Route path='/categories' element={<Categories/>}/>
                <Route path='/movie/:id' element={<Detail/>}/>
            </Route>
        </Routes>   
    </>
  )
}

export default Router
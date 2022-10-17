import React from 'react'
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/dashboard/dashboard'
import Home from '../pages/Home'

function AppRouter() {
  return (
    <>
    <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='dashboard/*' element={<Dashboard/>}/>
        </Routes>
    </Router>
    </>
  )
}

export default AppRouter
import React from 'react'
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/dashboard/dashboard'

function AppRouter() {
  return (
    <>
    <Router>
        <Routes>
            <Route path='/*' element={<Dashboard/>}/>
        </Routes>
    </Router>
    </>
  )
}

export default AppRouter
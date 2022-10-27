import React from 'react'
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from '../pages/login/login'
import NotFound from '../pages/notFound'
import Signup from '../pages/signup/signup'
import ToDoList from '../pages/ToDoList/ToDoList'

function AppRouter() {
  return (
    <>
    <Router>
        <Routes>
            <Route path='/' element={<Signup/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='/:id' element={<ToDoList/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    </Router>
    </>
  )
}

export default AppRouter
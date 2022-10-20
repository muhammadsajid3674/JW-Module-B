import React from 'react'
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from '../pages/login/login'
import Signup from '../pages/signup/signup'
import ToDoList from '../pages/ToDoList/ToDoList'

function AppRouter() {
  return (
    <>
    <Router>
        <Routes>
            <Route path='/' element={<Signup/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='todoapp' element={<ToDoList/>}/>
        </Routes>
    </Router>
    </>
  )
}

export default AppRouter
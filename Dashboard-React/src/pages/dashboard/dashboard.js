import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SidebarNav from '../../components/sidebarNav/sidebarNav'
import CardDetails from './cardDetails'
import Board from './dashboardPages/board'
import Charts from './dashboardPages/charts'
import Form from './dashboardPages/form'
import News from './dashboardPages/news'
import Table from './dashboardPages/table'

function Dashboard() {
  return (
    <>
    <div className='row m-0' >
      <div className='col-2 p-0'>
        <SidebarNav sideBarLabel='AdminLTE'/>
      </div>
      <div className='col-10 p-0'>
        <Routes>
          <Route path='/' element={<Board/>}/>
          <Route path='chart' element={<Charts/>}/>
          <Route path='table' element={<Table/>}/>
          <Route path='form' element={<Form/>}/>
          <Route path='news' element={<News/>}/>
          <Route path='news/cardDetails' element={<CardDetails/>}/>
        </Routes>
      </div>
    </div>
    </>
  )
}

export default Dashboard
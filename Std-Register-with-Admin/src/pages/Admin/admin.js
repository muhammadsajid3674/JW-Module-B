import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import MuiSideNav from '../../components/sidebarNav/MuiSideBar'
import { manageUser } from '../../config/firebaseMethods'
import Courses from './Pages/Courses'
import Quiz from './Pages/QuizForm'
import RegisterStd from './Pages/RegisterStd'

function Admin() {
    useEffect(() => {
        manageUser()
            .then((res) => {
            })
            .catch((err) => {
                alert(err);
            })
    }, [])
    return (
        <>
            <MuiSideNav
                header="Admin Panel"
                cusColor='primary'
                dataSource={[
                    {
                        name:'Students List',
                        to:'',
                    },
                    {
                        name:'Quiz Form',
                        to:'quiz',
                    },
                    {
                        name:'Courses Form',
                        to:'courses',
                    },
                ]} />
            <Routes>
                <Route path='' element={<RegisterStd />} />
                <Route path='quiz' element={<Quiz />} />
                <Route path='courses' element={<Courses />} />
            </Routes>
        </>
    )
}

export default Admin
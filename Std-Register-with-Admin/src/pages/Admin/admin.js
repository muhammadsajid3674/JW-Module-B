import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import MuiSideNav from '../../components/sidebarNav/MuiSideBar'
import { manageUser } from '../../config/firebaseMethods'
import Courses from './Pages/Courses'
import CreateResult from './Pages/CreateResult'
import Quiz from './Pages/QuizForm'
import RegisterStd from './Pages/RegisterStd'

function Admin() {
    const navigate = useNavigate()

    useEffect(() => {
        manageUser()
            .then((res) => {
            })
            .catch((err) => {
                console.log(err);
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
                    {
                        name:'Create Results',
                        to:'createResult',
                    },
                ]} />
            <Routes>
                <Route path='' element={<RegisterStd />} />
                <Route path='quiz' element={<Quiz />} />
                <Route path='courses' element={<Courses />} />
                <Route path='createResult' element={<CreateResult/>}/>
            </Routes>
        </>
    )
}

export default Admin
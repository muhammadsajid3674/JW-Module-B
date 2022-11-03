import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import MuiSideNav from '../../components/sidebarNav/MuiSideBar'
import { manageUser } from '../../config/firebaseMethods'
import StdQuiz from './pages/Quiz'

function StdPanel() {
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
                header="Student Panel"
                cusColor='custom'
                dataSource={[
                    {
                        name:'Quiz',
                        to:'',
                    },
                ]} />
            <Routes>
                <Route path='' element={<StdQuiz />} />
            </Routes>
        </>
    )
}

export default StdPanel
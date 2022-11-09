import React, { useEffect } from 'react'
import { manageUser } from '../../config/firebaseMethods'
import AdminLayout from './Pages/adminLayout'

function Admin() {

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
            <AdminLayout/>
        </>
    )
}

export default Admin
import React, { useEffect } from 'react'
import { manageUser } from '../../config/firebaseMethods'
import StdLayout from './pages/studentLayout'

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
          <StdLayout/>
        </>
    )
}

export default StdPanel
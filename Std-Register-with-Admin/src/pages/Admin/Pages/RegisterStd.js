import { Box, CircularProgress, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getData } from '../../../config/firebaseMethods'

function RegisterStd() {

  const [registerStd, setRegisterStd] = useState([])
  const [isLoading, setLoading] = useState(true)

  const getRegisterSTD = () => {
    return getData('user/')
      .then((res) => {
        setRegisterStd(res);
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    getRegisterSTD()
  }, [])


  return (
    <>
      <Grid container justifyContent='center' alignItems='center' minHeight="100vh" sx={{ backgroundColor: '#eee', py: 10 }}>
        <Grid item xs={10} md={10}>
          <Box sx={{ backgroundColor: '#fff', p: 4, borderRadius: '5px' }}>
            {isLoading ?
              (<Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '80vh'
              }}>
                <CircularProgress />
              </Box>) : (
                <>
                  <Typography variant="p" className="display-3">Student List</Typography>
                  <Box sx={{ overflowX: 'scroll' }}>
                    <table className="table table-bordered w-90 table-striped mt-2" style={{ fontSize: '0.8rem' }}>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Email</th>
                          <th>Password</th>
                          <th>Courses</th>
                          <th>Section</th>
                          <th>Date Of Birth</th>
                          <th>Contact</th>
                          <th>CNIC</th>
                          <th>Father Name</th>
                          <th>Father CNIC</th>
                          <th>Father Contact</th>
                          <th>Emergency Contact</th>
                        </tr>
                      </thead>
                      {registerStd.map((e, i) => {
                        return <tbody key={i}>
                          <tr>
                            <td>{i}</td>
                            <td>{e.firstName}</td>
                            <td>{e.lastName}</td>
                            <td>{e.email}</td>
                            <td>{e.password}</td>
                            <td>{e.courses}</td>
                            <td>{e.section}</td>
                            <td>{e.date}</td>
                            <td>{e.contact}</td>
                            <td>{e.cnic}</td>
                            <td>{e.fatherName}</td>
                            <td>{e.fatherCnic}</td>
                            <td>{e.fatherContact}</td>
                            <td>{e.emergencyContact}</td>
                          </tr>
                        </tbody>
                      })}
                    </table>
                  </Box>
                </>
              )
            }
          </Box>
        </Grid>
      </Grid >

    </>
  )
}

export default RegisterStd
import { Box, CircularProgress, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getData } from '../../../config/firebaseMethods'
import LineChart from '../../../components/LineChart/LineChart';
import CusDataTable from '../../../components/CusDataTable/CusDataTable';

function RegisterStd() {

  const [registerStd, setRegisterStd] = useState([])
  const [isLoading, setLoading] = useState(true)

  const getRegisterSTD = () => {
    return getData('Students/')
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
      <Grid container justifyContent='center' minHeight="100vh" spacing={3}>
        <Grid item xs={12} md={10}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
              <Box sx={{ backgroundColor: '#fff', p: 4, borderRadius: '5px' }}>
                <Typography variant='p' className='display-4'>Overview</Typography>
                <Grid container spacing={3} sx={{ my: 1 }}>
                  <Grid item xs={12} md={4}>
                    <Grid container className='text-white shadow rounded' justifyContent='center' alignItems='center' style={{ backgroundColor: '#003566' }}>
                      <Grid item className='display-3'>
                        <i className="fa-solid fa-user"></i>
                      </Grid>
                      <Grid item className='py-4 px-3'>
                        <span className='fs-1'>{registerStd.length}</span>
                        <p className='text-dark-50'>Registered Students</p>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Grid container className='text-white shadow rounded' justifyContent='center' alignItems='center' style={{ backgroundColor: '#003566' }}>
                      <Grid item className='display-3'>
                        <i className="fa-solid fa-comment"></i>
                      </Grid>
                      <Grid item className='py-4 px-3'>
                        <span className='fs-1'>10</span>
                        <p className='text-dark-50'>Courses</p>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Grid container className='text-white shadow rounded' justifyContent='center' alignItems='center' style={{ backgroundColor: '#003566' }}>
                      <Grid item className='display-3'>
                        <i className="fa-solid fa-question"></i>
                      </Grid>
                      <Grid item className='py-4 px-3'>
                        <span className='fs-1'>15</span>
                        <p className='text-dark-50'>Quizzes</p>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Grid >
            <Grid item xs={12} md={12}>
              <Box sx={{ backgroundColor: '#fff', p: 4, my: 2, borderRadius: '5px' }}>
                <Typography variant="p" className="display-4">Student List</Typography>
                {isLoading ?
                  (<Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '80vh'
                  }}>
                    <CircularProgress />
                  </Box>) : (
                    <Box sx={{ overflowX: 'scroll' }}>
                      <CusDataTable
                        onClickRow={(e) => console.log(e)}
                        dataSource={registerStd}
                        colValue={[
                          {
                            key: 'firstName',
                            name: 'First Name'
                          },
                          {
                            key: 'lastName',
                            name: 'Last Name'
                          },
                          {
                            key: 'email',
                            name: 'Email'
                          },
                          {
                            key: 'password',
                            name: 'Password'
                          },
                          {
                            key: 'courses',
                            name: 'Courses'
                          },
                          {
                            key: 'section',
                            name: 'Section'
                          },
                          {
                            key: 'date',
                            name: 'Date Of Birth'
                          },
                          {
                            key: 'contact',
                            name: 'Contact'
                          },
                          {
                            key: 'cnic',
                            name: 'CNIC'
                          },
                        ]}
                      />
                    </Box>
                  )}
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default RegisterStd
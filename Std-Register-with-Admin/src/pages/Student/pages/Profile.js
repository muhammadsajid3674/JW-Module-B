import { CircularProgress, Divider, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import { useEffect } from 'react'
import { getData, manageUser } from '../../../config/firebaseMethods'
import std from '../../../images/avatar.png'

function StdProfile() {

  const [isLoading, setLoading] = useState(true)
  const [stdData, setStdData] = useState({})

  const { firstName, lastName, email, courses, section, contact, cnic, fatherName, fatherContact } = stdData

  useEffect(() => {
    manageUser()
      .then((res) => {
        return getData(`user/`, res)
          .then((success) => {
            setLoading(false)
            setStdData(success)
          })
          .catch((err) => {
            console.log(err);
          })
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  return (
    <>
      {isLoading ? (
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '80vh'
        }}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container justifyContent='center' alignItems='center' minHeight='80vh'>
          <Grid item md={8}>
            <Box className='shadow' sx={{ backgroundColor: '#fff', p: 5, borderRadius: '5px' }}>
              <Grid container alignItems='center'>
                <Grid item md={3}>
                  <Box className="text-center">
                    <img src={std} className='img-fluid' />
                  </Box>
                </Grid>
                <Grid item md={7}>
                  <Box className="text-center">
                    <Typography variant='h3' className='fw-bold'>{`${firstName} ${lastName}`}</Typography>
                    <Typography variant='body1'>{courses}</Typography>

                  </Box>
                </Grid>
                <Grid item md={10}>
                  <Grid container justifyContent='center' spacing={3}>
                    <Grid item md={8} xs={6}>
                      <Typography variant='h6' className='fw-bold'>Name:</Typography>
                      <Typography variant='body1'>{`${firstName} ${lastName}`}</Typography>
                    </Grid>
                    <Grid item md={4} xs={6}>
                      <Typography variant='h6' className='fw-bold'>Email:</Typography>
                      <Typography variant='body1'>{email}</Typography>
                    </Grid>
                    <Grid item md={8} xs={6}>
                      <Typography variant='h6' className='fw-bold'>Course:</Typography>
                      <Typography variant='body1'>{courses}</Typography>
                    </Grid>
                    <Grid item md={4} xs={6}>
                      <Typography variant='h6' className='fw-bold'>Section:</Typography>
                      <Typography variant='body1'>{section}</Typography>
                    </Grid>
                    <Grid item md={8} xs={6}>
                      <Typography variant='h6' className='fw-bold'>Contact:</Typography>
                      <Typography variant='body1'>{contact}</Typography>
                    </Grid>
                    <Grid item md={4} xs={6}>
                      <Typography variant='h6' className='fw-bold'>CNIC:</Typography>
                      <Typography variant='body1'>{cnic}</Typography>
                    </Grid>
                    <Grid item md={8} xs={6}>
                      <Typography variant='h6' className='fw-bold'>Father Name:</Typography>
                      <Typography variant='body1'>{fatherName}</Typography>
                    </Grid>
                    <Grid item md={4} xs={6}>
                      <Typography variant='h6' className='fw-bold'>Father Contact:</Typography>
                      <Typography variant='body1'>{fatherContact}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      )}
    </>
  )
}

export default StdProfile
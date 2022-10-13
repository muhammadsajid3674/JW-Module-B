import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import BootstrapBtn from '../../../components/button/button'
import { FloatingInput } from '../../../components/input/input'

function Form() {
  return (
    <>
      <div style={{ backgroundColor: '#eee', height: '100vh' }}>
        <Container maxWidth='lg'>
          <Typography variant='p' className='display-4'>Forms</Typography>
          <div className='d-flex align-items-center justify-content-center' style={{ height: '80vh' }}>
            <Box className='dashCardDefault shadow text-center' sx={{ p: 3 }}>
              <Box>
                <Typography variant='h4' className='text-center mb-2'>Invoice Pay</Typography>
                <FloatingInput label='Payment amount' type='text' placeholder='Payment amount' />
                <FloatingInput label='Name on card' type='text' placeholder='Name on card' />
                <FloatingInput label='Card number' type='text' placeholder='Card number' />
                <div className='row'>
                  <div className='col-6'>
                    <FloatingInput label='Expiration' type='text' placeholder='Expiration' />
                  </div>
                  <div className='col-6'>
                    <FloatingInput label='Security code' type='text' placeholder='Security codet' />
                  </div>
                </div>
                <BootstrapBtn label="Pay Now" classes="btn btn-block btn-primary " />
              </Box>
            </Box>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Form
import { Button, Grid } from '@mui/material'
import {Link} from 'react-router-dom';
import React from 'react'

function Home() {
  return (
    <>
      <Grid container justifyContent='center' alignItems='center' sx={{ height: '100vh' }}>
        <Grid item>
          <Button variant='contained'>
            <Link to='dashboard' style={{ textDecoration: 'none', color: '#fff' }}>Dashboard</Link>
            </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default Home
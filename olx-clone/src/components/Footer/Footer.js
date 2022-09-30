import React from 'react'
import { Grid, Typography } from '@mui/material'
import './Footer.css'
import footerBanner from '../../img/Footer-Banner.jpg'
import appIcon from '../../img/App_Icon.png'
import googlePlay from '../../img/GooglePlay_Icon.png'


function Footer() {
  return (
    <div className='footer'>
      <Grid container spacing={2}>
        <Grid xs={4} className="grid1">
          <img src={footerBanner} />
        </Grid>
        <Grid xs={4} className="grid2">
          <h1 style={{
            fontWeight: '400'
          }}>TRY THE OLX APP</h1>
          <p>Buy, sell and find just about anything using the app on your mobile.</p>
        </Grid>
        <Grid xs={4} className="grid3">
        <h1 style={{
            fontWeight: '400'
          }}>TRY THE OLX APP</h1>
          <Grid>
            <img src={appIcon} width='200' />
            <img src={googlePlay} width='200' />
          </Grid>
        </Grid>
      </Grid>
      <div className='copyright'>
        <Typography variant="poster">Free Classified in Mirzapur . @1345 - 20.. OLX</Typography>
      </div>
    </div>
  )
}

export default Footer
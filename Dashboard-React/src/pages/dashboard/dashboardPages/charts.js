import { Container, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import '../../../App.css';
import BarChart from '../../../components/barChart/barChart';
import LineChart from '../../../components/LineChart/LineChart';
import { PieChart, DoughnutChart, PolarAreaChart, RadarChart } from '../../../components/pieChart/pieChart';
import { UserData, UserData1 } from '../../../Data'

function Charts() {

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [{
      label: 'User Gained',
      data: UserData.map((data) => data.userGain),
      backgroundColor: [
        "rgba(75,192,192,1)",
        "#ecf0f1",
        "#50AF95",
        "#f3ba2f",
        "#2a71d0",
      ],
    }]
  })
  const [userData1, setUserData1] = useState({
    labels: UserData1.map((data) => data.year),
    datasets: [{
      label: 'User Gained',
      data: UserData1.map((data) => data.userGain),
      backgroundColor: [
        "#50AF95",
        "#f3ba2f",
        "#2a71d0",
      ],
    }]
  })


  return (
    <>
      <div style={{ backgroundColor: '#eee', height: 'auto' }}>
        <Container maxWidth='lg'>
          <Typography variant='p' className='display-4'>Charts</Typography>
          <Grid container spacing={3} sx={{ m: 1 }}>
            <Grid item xs={6}>
              <Grid container className='dashCardDefault shadow' justifyContent='center' alignItems='center'>
                <Grid item alignSelf='self-start' sx={{ pt: 1 }}>
                  <span className='fs-3'>Recent Reports</span>
                </Grid>
                <Grid item sx={{ py: 3 }}>
                  <BarChart charData={userData}></BarChart>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid container className='dashCardDefault shadow' justifyContent='center' alignItems='center'>
                <Grid item alignSelf='self-start' sx={{ pt: 1 }}>
                  <p className='fs-3'>Char by %</p>
                  <ul style={{ listStyleType: 'none' }}>
                    <li className='list1'>Products</li>
                    <li className='list2'>Service</li>
                    <li className='list3'>Pricing</li>
                  </ul>
                </Grid>
                <Grid item sx={{ py: 3 }}>
                  <PieChart charData={userData1}></PieChart>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid container className='dashCardDefault shadow' justifyContent='center' alignItems='center'>
                <Grid item alignSelf='self-start' sx={{ pt: 1 }}>
                  <p className='fs-3'>Char by %</p>
                  <ul style={{ listStyleType: 'none' }}>
                    <li className='list1'>Products</li>
                    <li className='list2'>Service</li>
                    <li className='list3'>Pricing</li>
                  </ul>
                </Grid>
                <Grid item sx={{ py: 3 }}>
                  <DoughnutChart charData={userData1}></DoughnutChart>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid container className='dashCardDefault shadow' justifyContent='center' alignItems='center'>
                <Grid item alignSelf='self-start' sx={{ pt: 1 }}>
                  <p className='fs-3'>Char by %</p>
                </Grid>
                <Grid item sx={{ py: 3 }}>
                  <LineChart charData={userData}></LineChart>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid container className='dashCardDefault shadow' justifyContent='center' alignItems='center'>
                <Grid item alignSelf='self-start' sx={{ pt: 1 }}>
                  <p className='fs-3'>Char by %</p>
                  <ul style={{ listStyleType: 'none' }}>
                    <li className='list1'>Products</li>
                    <li className='list2'>Service</li>
                    <li className='list3'>Pricing</li>
                  </ul>
                </Grid>
                <Grid item sx={{ py: 3 }}>
                  <PolarAreaChart charData={userData1}></PolarAreaChart>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  )
}

export default Charts
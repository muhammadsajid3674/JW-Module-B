import { Container, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import '../../../App.css';
import BarChart from '../../../components/barChart/barChart';
import LineChart from '../../../components/LineChart/LineChart';
import { PieChart } from '../../../components/pieChart/pieChart';
import { UserData, UserData1 } from '../../../Data'

function Board() {

    const [userData, setuserData] = useState({
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
    const [userData1, setuserData1] = useState({
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
        <div style={{ backgroundColor: '#eee', height: '100vh' }}>
            <Container maxWidth='lg'>
                <Typography variant='p' className='display-4'>Overview</Typography>
                <Grid container spacing={3} sx={{ m: 1 }}>
                    <Grid item xs={3}>
                        <Grid container className='dashCard1 text-white shadow' justifyContent='center' alignItems='center'>
                            <Grid item className='display-3'>
                                <i className="fa-solid fa-user"></i>
                            </Grid>
                            <Grid item className='py-4 px-3'>
                                <span className='fs-1'>10368</span>
                                <p className='text-dark-50'>members online</p>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={3}>
                        <Grid container className='dashCard2 text-white shadow' justifyContent='center' alignItems='center'>
                            <Grid item className='display-3'>
                                <i class="fa-solid fa-cart-shopping"></i>
                            </Grid>
                            <Grid item className='py-4 px-3'>
                                <span className='fs-1'>388,688</span>
                                <p className='text-dark-50'>items solid</p>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={3}>
                        <Grid container className='dashCard3 text-white shadow' justifyContent='center' alignItems='center'>
                            <Grid item className='display-3'>
                                <i class="fa-solid fa-calendar-days"></i>
                            </Grid>
                            <Grid item className='py-4 px-3'>
                                <span className='fs-1'>1,086</span>
                                <p className='text-dark-50'>this week</p>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={3}>
                        <Grid container className='dashCard4 text-white shadow' justifyContent='center' alignItems='center'>
                            <Grid item className='display-3'>
                                <i class="fa-solid fa-dollar-sign"></i>
                            </Grid>
                            <Grid item className='px-4'>
                                <span className='fs-1'>$1,060,386</span>
                                <p className='text-dark-50'>total earnings</p>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
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
                </Grid>
            </Container>
        </div>
    )
}

export default Board
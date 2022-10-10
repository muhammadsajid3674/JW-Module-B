import React from 'react'
import { Button, Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { styled } from '@mui/material/styles';
import './Pricing.css';


const ColorButton = styled(Button)(({ theme }) => ({
    color: '#fff',
    border: '1px solid #fff',
    padding: '10px 30px',
    borderRadius: '50px',
    '&:hover': {
        border: '1px solid #000',
        backgroundColor: '#fff',
        color: '#000',
    },
}));

function Pricing() {
    return (
        <>
            <Grid container sx={{
                backgroundColor: '#F5FBFF',
                padding: '80px 0'
            }}>
                <Container>
                    <Box sx={{
                        padding: '80px 0'
                    }}>
                        <Typography variant='h2'>Pricing</Typography>
                    </Box>
                    <Grid container spacing={8}>
                        <Grid item md={4}>
                            <Box>
                                <Typography variant='h6'>SHORT CONSULTATION</Typography>
                                <Typography sx={{ padding: '20px 0' }} variant='caption'>$60</Typography>
                                <Typography variant='body1'>In an hour we can talk about your goals, and I can lay out the best course of action for you to achieve the success you’re looking for.</Typography>
                            </Box>
                        </Grid>
                        <Grid item md={4}>
                            <Box>
                                <Typography variant='h6'>MAXI PACKAGE</Typography>
                                <Typography sx={{ padding: '20px 0' }} variant='caption'>$300 per month</Typography>
                                <Typography variant='body1'>If you’re serious about reaching your full potential, I advise you start off with a package that means business.</Typography>
                            </Box>
                        </Grid>
                        <Grid item md={4}>
                            <Box>
                                <Typography variant='h6'>MINI PACKAGE</Typography>
                                <Typography sx={{ padding: '20px 0' }} variant='caption'>$200 per month</Typography>
                                <Typography variant='body1'>If you’re on a budget, or you’re not ready to take a big leap yet, you can start out with a smaller package.</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
            <Grid container justifyContent='center' sx={{
                backgroundColor: '#101126',
            }}>
                <Box sx={{
                    textAlign: 'center',
                    width: '100%',
                    maxWidth: 1000,
                    padding: '80px 0',
                    color: '#fff',
                }}>
                    <Typography sx={{ pb: '20px' }} variant='body1'>PHYLOSOPHY</Typography>
                    <Typography sx={{ pb: '20px', px: 2 }} variant='h3'>I believe we all have the power to change our lives within us. I also believe there is no shame in asking for help to deliver such change.</Typography>
                    <ColorButton variant='outlined'>About me</ColorButton>
                </Box>
            </Grid>
        </>
    )
}

export default Pricing
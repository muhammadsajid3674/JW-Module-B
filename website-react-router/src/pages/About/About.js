import React from 'react'
import { Button, Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { styled } from '@mui/material/styles';
import './About.css';


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

function About() {
    return (
        <>
            <Grid container justifyContent='center' sx={{
                backgroundColor: '#F5FBFF',
                padding: '80px 0'
            }}>
                <Grid item>
                    <Box sx={{
                        textAlign: 'center',
                        width: '100%',
                        maxWidth: 600
                    }} >
                        <Typography variant='subtitle2'>ABOUT ME</Typography>
                        <Typography sx={{ padding: '25px 0' }} variant='h4'>I’m simply a tool you can use to unlock the potential you already have inside you. Success doesn’t come from the outside, but from within.</Typography>
                        <img width='100%' src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=600,h=624,fit=crop/ovinga153z/pexels-d9vXpjZMnvsKP4DD.jpg' />
                        <Box sx={{ padding: '25px 0' }}>
                            <Typography sx={{ padding: '25px 0' }} variant='h3'>About the Coach</Typography>
                            <Typography variant='body1'>I’ve worked with over 800 coaching clients, in 23 counties, over 4 continents. What this has shown me is not only that success can happen anywhere, but that the building blocks of success are within everyone, wherever they come from. </Typography>
                        </Box>
                        <Box sx={{ padding: '25px 0' }}>
                            <Typography sx={{ padding: '25px 0' }} variant='h3'>Experience & Education</Typography>
                            <Typography variant='body1'>I am never satisfied with my work until my clients have achieved the goals that we set out together. It’s this determination and refusal to let anyone down that has become my hallmark in the industry. </Typography>
                        </Box>
                    </Box>
                </Grid>
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
                    <Typography sx={{paddingBottom: '20px'}} variant='body1'>PHYLOSOPHY</Typography>
                    <Typography sx={{paddingBottom: '20px'}} variant='h3'>I believe we all have the power to change our lives within us. I also believe there is no shame in asking for help to deliver such change.</Typography>
                    <ColorButton variant='outlined'>About me</ColorButton>
                </Box>
            </Grid>
        </>
    )
}

export default About
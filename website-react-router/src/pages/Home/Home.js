import React from 'react'
import { Button, Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import './Home.css';


const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(grey[900]),
    backgroundColor: grey[900],
    padding: '10px 30px',
    borderRadius: '50px',
    '&:hover': {
        backgroundColor: grey[800],
    },
}));

function Home() {
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
                        <Typography sx={{ padding: '25px 0' }} variant='subtitle2'>THE SUCCESS COACH</Typography>
                        <Typography variant='h1'>Oving Willson</Typography>
                        <img width='100%' src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=600,h=624,fit=crop/ovinga153z/Oving-m57zvXXbkDF0JQlL.jpg' />
                        <Typography sx={{ padding: '20px 0' }} variant='h3'>Are you ready to make the biggest change in your life?</Typography>
                        <ColorButton>About me</ColorButton>
                    </Box>
                </Grid>
            </Grid>
            <Container>
                <Grid container sx={{
                    padding: '20px 0'
                }}>
                    <Grid item md={5}>
                        <Box sx={{ margin: '50px 0' }}>
                            <Typography variant='subtitle2'>COACHING TECHNIQUE</Typography>
                            <Typography variant='h4'>I’ve honed my coaching technique over the decades. I aim to communicate openly and clearly, addressing critical points and providing continuous, constructive feedback.</Typography>
                        </Box>
                    </Grid>
                    <Grid item md={3}>

                    </Grid>
                    <Grid item md={4}>
                        <Box sx={{ margin: '50px 0' }}>
                            <Typography variant='h6'>GOALS</Typography>
                            <Typography variant='body1'>The process starts with clearly defined objectives. How will you know how to change if you don’t know what needs changing. We’ll develop your goals in conversation together.</Typography>
                        </Box>
                        <Box sx={{ margin: '50px 0' }}>
                            <Typography variant='h6'>GROWTH</Typography>
                            <Typography variant='body1'>The growth stage is the meat in the sandwich. It is here that you put new strategies to work, and begin addressing the issues that have been holding you back.  </Typography>
                        </Box>
                        <Box sx={{ margin: '50px 0' }}>
                            <Typography variant='h6'>REFLECTION</Typography>
                            <Typography variant='body1'>At this point in the process I ask you to reflect on the changes you’ve made, and whether you’re satisfied with there the results have led you. After this, we can address sustainability.</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Grid container sx={{
                backgroundColor: '#F5FBFF',
                padding: '80px 0'
            }}>
                <Container>
                    <Grid container spacing={4} sx={{
                        padding: '20px 0'
                    }}>
                        <Grid item md={12}>
                        <Box>
                            <Typography variant='subtitle2'>TESTIMONIALS</Typography>
                            <Typography variant='h3'>Success stories</Typography>
                        </Box>
                        </Grid>
                        <Grid item md={5}>
                            <Box sx={{ lineHeight: 2.5 }}>
                                <Typography variant='body1'>“Oving helped me regain my confidence after being fired and helped me find a healthy routine that put me on track towards changing my career path. Now, I’m doing something that I always wanted to do.”</Typography>
                                <Typography variant='caption'>– Kasia Ductorn</Typography>
                            </Box>
                        </Grid>
                        <Grid item md={2}></Grid>
                        <Grid item md={5}>
                            <Box sx={{ lineHeight: 2.5 }}>
                                <Typography variant='body1'>“I struggled with all the new things that I was expected to do as an adult. Taxes, work – the stuff they don’t teach you at school. I gained confidence, started taking more chances, and am even working towards getting into college.”</Typography>
                                <Typography variant='caption'>– Kasia Ductorn</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
        </>
    )
}

export default Home
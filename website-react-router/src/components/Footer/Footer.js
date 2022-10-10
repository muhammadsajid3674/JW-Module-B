import { Box, Grid, Icon, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import styled from 'styled-components';

function Footer() {
    return (
        <>
            <Container>
                <Grid container>
                    <Grid item xs={8}>
                        <Box sx={{
                            py: 6
                        }}>
                            <Typography variant='h4'>Oving Willson</Typography>
                            <Typography variant='subtitle2'>success@oving.com</Typography>
                            <Typography variant='subtitle2'>+7635-4526-55</Typography>
                        </Box>
                    </Grid>
                    <Grid item md={4} >
                        <Box sx={{
                            py: 6,
                            textAlign: 'end'
                        }}>
                            <TwitterIcon sx={{ mx: 1}}/>
                            <FacebookIcon sx={{ mx: 1}}/>
                            <InstagramIcon sx={{ mx: 1}}/>
                        </ Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Footer
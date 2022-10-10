import { Button, FormControl, Grid, TextareaAutosize, TextField, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import styled from 'styled-components';
import './Contact.css';

function Contact() {
    return (
        <>
            <Container>
                <Grid container spacing={4} sx={{
                    paddingTop: '80px'
                }} >
                    <Grid item md={7}>
                        <Box sx={{
                            paddingTop: '80px',
                            width: '100%',
                            maxWidth: 400,
                        }}>
                            <Typography variant='h2'>Contact</Typography>
                            <Typography sx={{ padding: '10px 0' }} variant='subtitle2'>Ready to take the first step on your journey to success? Reach out and we can start discussing how to change your life.</Typography>
                        </Box>
                        <FormControl fullWidth  >
                            <TextField id="outlined-basic" label="Name*" variant="outlined" margin="dense" />
                            <TextField id="outlined-basic" label="Last name*" variant="outlined" margin="dense" />
                            <TextField id="outlined-basic" label="Your email*" variant="outlined" margin="dense" />
                            <TextField id="outlined-basic" label="Message*" variant="outlined" margin="dense">
                                <TextareaAutosize
                                    aria-label="minimum height"
                                    minRows={3}
                                    placeholder="Minimum 3 rows"
                                />
                            </TextField>
                        </FormControl>
                        <Button sx={{
                            my: 2,
                            backgroundColor: '#212121',
                            color: '#fff',
                            borderRadius: '50px',
                            padding: '10px 30px',
                        }} variant='contained'>Send</Button>
                    </Grid>
                    <Grid item md={5}>
                        <img width='100%' src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=496,h=733,fit=crop/ovinga153z/photo-of-man-wearing-watch-YK9qJMkkpPSa31np.jpg' />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Contact
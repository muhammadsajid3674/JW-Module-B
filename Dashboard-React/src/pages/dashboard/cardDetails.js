import { Container, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router-dom'

function CardDetails() {

    const location = useLocation()
    const dataObj = location.state.data

    return (
        <>
            <Container maxWidth='lg'>
                <Typography variant='p' className='display-4'>News Details</Typography>
                <Grid container spacing={2} sx={{ m: 2 }} justifyContent='space-between'>
                    <Grid item xs={6}>
                        <Typography variant='subtitle1' className='my-3'>{dataObj.author}</Typography>
                        <Typography variant='h4' className='my-3'>{dataObj.title}</Typography>
                        <Typography variant='body1' className=''>{dataObj.content}<Link href={dataObj.url}>Read More..</Link></Typography>
                        <Typography variant='subtitle2' className=''>{dataObj.publishedAt}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <img src={dataObj.urlToImage} className="img-fluid"/>
                    </Grid>
                </Grid>

            </Container>
        </>
    )
}

export default CardDetails
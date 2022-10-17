import { Container, Typography } from '@mui/material'
import React from 'react'

function CardDetails() {
    return (
        <>
            <Container maxWidth='lg'>
                <Typography variant='p' className='display-4' sx={{ m: 5 }}>News Details</Typography>
                <Typography variant='p' className='' sx={{ m: 5 }}>{}</Typography>

            </Container>
        </>
    )
}

export default CardDetails
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Link, Navigate, useNavigate } from 'react-router-dom';

function News() {

    const [data, setData] = useState([])

    const getData = () => {
        axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=21bb79dc4c4146f996330f8db9c04206")
            .then((response) => {
                setData(response.data.articles);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const navigate = useNavigate()
    const transferData = (data) => {
        navigate('cardDetails', {
            state:{
                data
            }
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <Container maxWidth='lg'>
                <Typography variant='p' className='display-4' sx={{ m: 5 }}>Recent News</Typography>
                <Grid container spacing={2} justifyContent='center' sx>
                    {data.map((e, i) => {
                        return <Grid item key={i} className='d-flex'>
                            <Card sx={{ maxWidth: 345 }} onClick={() => transferData(e)} className='align-self-normal'>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={e.urlToImage}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="">
                                            {e.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {e.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    })}
                </Grid>
            </Container>
        </>
    );
}

export default News;

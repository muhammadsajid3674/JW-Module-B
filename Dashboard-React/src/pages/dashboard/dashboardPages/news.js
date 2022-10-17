import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

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
    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <Container maxWidth='lg'>
                <Typography variant='p' className='display-4' sx={{ m: 5 }}>Recent News</Typography>
                <Grid container spacing={2} justifyContent='center' sx>
                    {data.map((e, i) => {
                        console.log(e)
                        return <Grid item >
                            <Link to='cardDetails' style={{ textDecoration: 'none' }}>
                                <Card sx={{ maxWidth: 345 }}>
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
                            </Link>
                        </Grid>
                    })}
                </Grid>
            </Container>
        </>
    );
}

export default News;

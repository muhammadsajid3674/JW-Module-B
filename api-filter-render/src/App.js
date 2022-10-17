import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';

function App() {

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
    <div className="App">
      <header className="App-header">
        <Typography variant='h1'>Recent News</Typography>
        <Grid container spacing={2} justifyContent='center'>
          {data.map((e, i) => {
            console.log(e)
            return <Grid item >
              <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={e.urlToImage}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
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

      </header>
    </div>
  );
}

export default App;

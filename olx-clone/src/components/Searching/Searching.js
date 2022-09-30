import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import logo from '../../img/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import data from '../data'
import './Searching.css'
import { Box, Container } from '@mui/material';

function Searching() {

    const [filter, setFilter] = useState("");

    const searchText = (event) => {
        setFilter(event.target.value)
    }

    let dataSearch = data.cardData.filter(item => {
        return Object.keys(item).some(key => {
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
        })
    })
    console.log(filter)

    return (
        <>
            <div>
                <main>
                    <div className='logo'>
                        <img src={logo} />
                    </div>
                    <div className='categoryDrop'>
                        <select>
                            <option>Bikes</option>
                            <option>Cars</option>
                            <option>Mobiles</option>
                            <option>Properties</option>
                        </select>
                    </div>
                    <div className='searchBar'>
                        <form>
                            <input
                                value={filter}
                                style={{
                                    minWidth: '500px',
                                    borderRadius: "5px 0 0 5px"
                                }}
                                type="text"
                                placeholder="What would you like to buy"
                                onChange={searchText.bind(this)}
                            />
                        </form>
                        <SearchIcon className='searchIcons' sx={{
                            padding: '6.5px',
                            fontSize: '2rem',
                            color: 'var(--Purple)'
                        }} />
                    </div>
                </main>
            </div>
            <Container>
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
                    {data.cardData.map((value, index) => {
                        return (
                            <Card className="cardMain" sx={{ maxWidth: 250 }}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={value.img}
                                />
                                <CardContent className="cardText">
                                    <Typography gutterBottom variant="h5" component="div">
                                        {value.label}
                                    </Typography>
                                    <Typography variant="h6" color="text.secondary">
                                        {value.price}
                                    </Typography>
                                </CardContent>
                                <Typography variant="small" color="text.secondary">
                                    {value.address}
                                </Typography>
                            </Card>
                        )
                    })}
                </Box>
            </Container>
        </>
    )
}

export default Searching
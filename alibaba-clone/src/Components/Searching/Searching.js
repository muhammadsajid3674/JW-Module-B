import React from 'react'
import { useState, useEffect } from 'react';
import { Grid, TextField, Typography, Container, Stack, Button } from "@mui/material";
import { Box } from "@mui/system";
import data from '../data';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import logo from '../../img/logo.png'
import './Searching.css'

function Searching() {

    console.log('first')
    
    const [categories, setCategories] = useState([])
    const [multiCategories, setMultiCategories] = useState([])
    const [selectedCategories, setSelectedCategories] = useState("")
    const [filterList, setFilterList] = useState([])

    let categoryList = data.cardData.map((x) => x.category)
    const getCategories = () => {
        categoryList = [...new Set([...categoryList])]
        setCategories([...categoryList])
        // console.log(categoryList)
    }
    
    const searchCategoryItem = (val) => {
        setSelectedCategories(val);
        let filteredList = data.cardData.filter((x) => x.category == val);
        setFilterList([...filteredList])
        
        categoryList.unshift(val)
        categoryList = [...new Set([...categoryList])]
        // console.log(categoryList)
        setCategories([...categoryList])


    }

    const searchedItems = (val) => {
        let filteredList = data.cardData.filter(
            (x) =>
                x.category == selectedCategories &&
                x.label.toLowerCase().includes(val.toLowerCase())
        )
        setFilterList([...filteredList])
    }

    useEffect(() => {
        getCategories()
    }, [])


    return (
        <div>
            <main>
                <div className='logo'>
                    <img src={logo} />
                </div>
                <div className='searchBar'>
                    <form>
                        <input
                            style={{
                                minWidth: '500px',
                            }}
                            type="text"
                            placeholder="What would you like to buy"
                            onChange={(e) => searchedItems(e.target.value)}
                        />
                    </form>
                </div>
            </main>
            <Container>
                <Grid>
                    <Stack spacing={2} direction="row"
                        onClick={(e) => searchCategoryItem(e.target.value)}
                        value={categories}
                    >
                        {categories.map((e, i) => (
                            <Button color='warning' variant='contained' size='large' key={i} value={e}>{e}</Button>
                        ))}
                    </Stack>
                </Grid>
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
                    {filterList.map((value, index) => {
                        return (
                            <Card className="cardMain" sx={{ maxWidth: 250 }} key={index}>
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
                <hr />
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
                    {data.cardData.map((value, index) => {
                        return (
                            <Card className="cardMain" sx={{ maxWidth: 250 }} key={index}>
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
        </div>

    )
}

export default Searching
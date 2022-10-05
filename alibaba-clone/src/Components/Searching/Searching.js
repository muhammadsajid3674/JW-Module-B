import React from 'react'
import { useState, useEffect } from 'react';
import { Grid, TextField, Typography, Container, Stack, Chip } from "@mui/material";
import { Box } from "@mui/system";
import data from '../data';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import DeleteIcon from '@mui/icons-material/Delete';
import logo from '../../img/logo.png'
import './Searching.css'

function Searching() {  
    const [categories, setCategories] = useState([])
    const [selectedCategoriesArr, setSelectedCategoriesArr] = useState([])
    let [filterList, setFilterList] = useState([])


    const getCategories = () => {
        let categoryList = data.cardData.map(x => x.category)
        categoryList = [...new Set([...categoryList])]
        setCategories([...categoryList])
    }

    const searchItems = (val) => {
        let filteredList = [];
        selectedCategoriesArr.forEach(elem => filteredList = [...filteredList, ...data.cardData.filter(x => x.category === elem && x.label.toLowerCase().includes(val.toLowerCase()))]);
        setFilterList([...filteredList])
    }

    const selectedChip = (val) => {
        let chipArr = [...selectedCategoriesArr];
        chipArr.push(val);
        chipArr = [...new Set([...chipArr])];
        
        let chipArr2= []

        chipArr.forEach(elem => chipArr2 = [...chipArr2, ...data.cardData.filter(x => x.category === elem)]);
        
        setFilterList([...chipArr2])
        setSelectedCategoriesArr([...chipArr])
    }

    const deleteChip = (val) => {
        selectedCategoriesArr.splice(val, 1)
        setSelectedCategoriesArr([...selectedCategoriesArr])

        let chipArr2 = [];
        selectedCategoriesArr.forEach(elem => chipArr2 = [...chipArr2, ...data.cardData.filter(x => x.category === elem)]);
        setFilterList([...chipArr2])

    }

    // it will run when component initialize ...
    useEffect(() => {
        getCategories()
    }, [])


    return (
        <>
            <Container>
                <Stack spacing={2} direction="row" className="main" >
                <Box className='logo'>
                    <img src={logo} alt="" />
                </Box>
                <Box>
                        <TextField
                            id="outlined-base"
                            variant="outlined"
                            color="warning"
                            style={{
                                minWidth: '500px',
                            }}
                            type="text"
                            label="What would you like to buy"
                            onChange={(e) => searchItems(e.target.value)}
                        />
                </Box>
                </Stack>
                <Grid>
                    <Stack spacing={2} direction="row">
                        {selectedCategoriesArr && selectedCategoriesArr.length > 0 ? selectedCategoriesArr.map((e, i) => (
                            <Chip sx={{padding: 2, borderRadius: '5px'}} color="error" label={e} key={i} onDelete={() => deleteChip(e)} deleteIcon={<DeleteIcon/>}/>
                        )): null}
                        {categories && categories.length > 0 ? categories.map((e, i) => (
                            <Chip sx={{padding: 2, borderRadius: '5px'}} color="warning" label={e} key={i} onClick={() => selectedChip(e)}/>
                        )): null}
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
        </>

    )
}

export default Searching
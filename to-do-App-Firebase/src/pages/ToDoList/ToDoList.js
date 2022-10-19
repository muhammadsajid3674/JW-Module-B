import { Delete, Edit } from '@mui/icons-material'
import { Box, Button, createTheme, FormControl, Grid, InputLabel, OutlinedInput, ThemeProvider } from '@mui/material'
import React from 'react'



function ToDoList() {
    const colorTheme = createTheme({
        palette: {
            neutral: {
                main: '#64748B',
                contrastText: '#fff',
            },
        },
    });
    return (
        <>
            <Box sx={{ backgroundColor: "#3c6e71", height: '100vh' }}>
                <Grid container justifyContent='center'>
                    <Grid item md={4} xs={10}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            boxShadow: '0px 0px 10px rgba(0,0,0,0.5)',
                            p: 4,
                            borderRadius: '10px',
                            backgroundColor: '#fff'
                        }}>
                            <ThemeProvider theme={colorTheme}>
                                <FormControl sx={{ m: 1 }} variant='outlined' color='neutral'>
                                    <InputLabel htmlFor='outlined-userInput'>Enter items</InputLabel>
                                    <OutlinedInput
                                        id='outlined-userInput'
                                        type='text'
                                        // onChange={handleChange('password')}
                                        label='Enter items'
                                    ></OutlinedInput>
                                </FormControl>
                            </ThemeProvider>
                            <Box>
                                <Button variant="contained" color='info'
                                    sx={{
                                        mx: 1,
                                        backgroundColor: '#191919',
                                        '&:hover': {
                                            backgroundColor: '#fff',
                                            color: '#191919'
                                        }
                                    }}
                                >Add</Button>
                                <Button variant="contained" color='info'
                                    sx={{
                                        mx: 1,
                                        backgroundColor: '#d90429',
                                        '&:hover': {
                                            backgroundColor: '#fff',
                                            color: '#d90429'
                                        }
                                    }}
                                >Delete All</Button>
                            </Box>
                            <Box sx={{ m: 1 }}>
                                <ul className='list-group' style={{ width: '100%', bgcolor: 'background.paper' }}>
                                    <li className='list-group-item' style={{ display: 'flex', justifyContent: 'space-between', borderColor: '#ccc' }}>
                                        hello world
                                        <Box>
                                            <Edit />
                                            <Delete />
                                        </Box>
                                    </li>
                                </ul>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default ToDoList
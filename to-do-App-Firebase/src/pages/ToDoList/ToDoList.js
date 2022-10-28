import React, { useEffect, useState } from 'react'
import { Delete, Edit, PanoramaSharp, SettingsCellSharp } from '@mui/icons-material'
import { Box, Button, CircularProgress, createTheme, FormControl, Grid, IconButton, InputLabel, OutlinedInput, ThemeProvider, Typography } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../../components/loader/loader';
import { deleteAllData, deleteSingleObject, getData, manageUser, pushData } from '../../config/firebaseMethods';



function ToDoList() {

    //Loader
    const navigate = useNavigate()
    const params = useParams()

    const [isLoading, setLoading] = useState(true)


    const colorTheme = createTheme({
        palette: {
            neutral: {
                main: '#64748B',
                contrastText: '#fff',
            },
        },
    });

    const logOut = () => {
        navigate('/login')
    }


    // ToDo Functionality---------------
    let [text, setText] = useState("");
    const [userID, setUserID] = useState("")
    let [list, setList] = useState([]);

    let add = () => {
        pushData({
            text: text,
            userId: userID,
        },
            `todo/${userID}`)
            .then((res) => {
                list.push({text:text, userID:userID})
                setList([...list])
                setText('')
            })
            .catch((err) => {
                console.log(err);
            })
    }
    let getUserData = (id) => {
        getData(`todo/${id}`).then((res) => {
            setList(res)
            setLoading(false)
            console.log(list);
        })
            .catch((err) => {
                setLoading(false)
                console.log(err);
            })
    }

    // // add button functionality

    // Delete All button functionality
    let deleteAll = () => {
        setList([])
        deleteAllData(`todo/${userID}`)
    }



    // Delete item button functionality
    let deleteItem = (id, listId) => {
        deleteSingleObject(`todo/${userID}`, listId)
        let listI = list.filter((value, index) => {
            return index !== id
        })
        setList(listI)
    }

    // let editBtn = (id) => {
    //     let newValue = prompt("New Value")
    //     list[id] = newValue
    //     setList([...list])
    // }
    // ToDo Functionality-----------------

    useEffect(() => {
        manageUser()
            .then((res) => {
                if (params.id === res) {
                    setUserID(res);
                    getUserData(res);
                }
                else {
                    navigate('/login')
                }
            })
            .catch((err) => {
                alert(err);
            })
    }, [])

    return (
        <>

            <Box sx={{ backgroundColor: "#3c6e71", minHeight: '100vh' }}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'end',
                        p: 1
                    }}
                >
                    <Button variant="contained" color='info'
                        sx={{
                            mx: 1,
                            backgroundColor: '#000',
                            '&:hover': {
                                backgroundColor: '#fff',
                                color: '#000'
                            }
                        }}
                        onClick={logOut}
                    >Log Out</Button>
                </Box>
                <Box className='text-white text-center mb-4'>
                    <Typography variant='p' className='display-4'>Welcome</Typography>
                </Box>
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
                            <Typography variant='p' className='display-5 text-center'>Todo App</Typography>
                            <ThemeProvider theme={colorTheme}>
                                <FormControl sx={{ m: 1 }} variant='outlined' color='neutral'>
                                    <InputLabel htmlFor='outlined-userInput'>Enter items</InputLabel>
                                    <OutlinedInput
                                        id='outlined-userInput'
                                        type='text'
                                        // onChange={handleChange('password')}
                                        label='Enter items'
                                        onChange={(e) => setText(e.target.value)}
                                        value={text}
                                        fullWidth
                                        required
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
                                    onClick={add}
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
                                        onClick={deleteAll}
                                    >Delete All</Button>
                            </Box>
                            <Box sx={{ m: 1, textAlign: 'center' }}>
                                {isLoading ? <CircularProgress /> :
                                    <ul className='list-group' style={{ width: '100%', bgcolor: 'background.paper' }}>
                                        {list.map((e, i) => {
                                            return <li key={i} className='list-group-item p-3' style={{ display: 'flex', justifyContent: 'space-between', borderColor: '#ccc' }}>
                                                {e.text}
                                                <Box>
                                                {/* <IconButton onClick={() => editBtn(i)}>
                                                    <Edit />
                                                </IconButton> */}
                                                <IconButton onClick={() => deleteItem(i, e.id)}>
                                                    <Delete />
                                                </IconButton>
                                            </Box>
                                            </li>
                                        })}
                                    </ul>
                                }

                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default ToDoList
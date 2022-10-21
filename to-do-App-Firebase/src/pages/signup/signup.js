import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Box, Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { handleSignup, sendDataFirestore } from '../../config/firebaseMethods'
import signUpIcon from '../../images/signup-icon.png'

function Signup() {

    const navigate = useNavigate()
    // fields data push
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
    })

    const handleChange = (event) => {
        let newInput = { [event.target.name]: event.target.value }
        setData({ ...data, ...newInput });
        // fields data push
    }
    const { email, password, name } = data;

    const handleSubmit = () => {
        //Firebase Auth
        handleSignup({ email, password, name })
            .then((userCredential) => {
                // Signed in 
                console.log(userCredential)
                navigate('/login')
            })
            .catch((error) => {
                console.log(error.message)
            });
    }

    // Password Field
    const [values, setValues] = useState({
        email: '',
        password: '',
        showPassword: false
    })
    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword
        });
    };
    const handleMouseDownPassword = (event) => {
        // event.preventDefault();
    }
    // Password Field

    return (
        <>
            <Box sx={{ backgroundColor: '#e76f51', height: '100vh' }}>
                <Box className='text-center py-3'>
                    <Typography variant='p' className='display-3 text-white'>Welcome to ToDo App</Typography>
                </Box>
                <Grid container justifyContent='center' alignItems='center' height='80vh'>
                    <Grid item md={4} xs={10}>
                        <Box sx={{ boxShadow: '0px 0px 10px rgba(0,0,0,0.5)', p: 5, borderRadius: '10px', backgroundColor: '#fff' }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <Box className='d-flex justify-content-center align-items-center text-center mb-2'>
                                    <img src={signUpIcon} className='w-25' />
                                    <Typography variant='h4' className='text-center'>Signup</Typography>
                                </Box>
                                {/* <FormControl sx={{ m: 1 }} variant='outlined'>
                                    <InputLabel htmlFor='outlined-name'>Name</InputLabel>
                                    <OutlinedInput
                                        id='outlined-name'
                                        type='text'
                                        onChange={(event) => handleChange(event)}
                                        label='Name'
                                        name="name"
                                    ></OutlinedInput>
                                </FormControl> */}
                                <TextField
                                    margin='dense'
                                    id="outlined-name"
                                    label="Username"
                                    variant="outlined"
                                    type='text'
                                    onChange={(event) => handleChange(event)}
                                    name="name"
                                    fullWidth
                                    required
                                    value={name}
                                />
                                <TextField
                                    margin='dense'
                                    id="outlined-email"
                                    label="Email"
                                    variant="outlined"
                                    type='email'
                                    onChange={(event) => handleChange(event)}
                                    name="email"
                                    fullWidth
                                    required
                                    value={email}
                                />
                                <FormControl margin='dense' variant='outlined'>
                                    <InputLabel htmlFor='outlined-adornment-password'>Password</InputLabel>
                                    <OutlinedInput
                                        id='outlined-adornment-password'
                                        type={values.showPassword ? 'text' : 'password'}
                                        onChange={(e) => handleChange(e)}
                                        name="password"
                                        endAdornment={
                                            <InputAdornment position='end'>
                                                <IconButton
                                                    aria-label='toggle password visibility'
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge='end'
                                                >
                                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label='Password'
                                        fullWidth
                                        required
                                        value={password}
                                    ></OutlinedInput>
                                </FormControl>
                            </Box>
                            <Box sx={{
                                textAlign: 'center',
                                mb: 2
                            }}>
                                <Button variant='contained'
                                    onClick={handleSubmit}
                                    sx={{
                                        backgroundColor: '#e76f51',
                                        mt: 1,
                                        '&:hover': {
                                            backgroundColor: '#f4a261'
                                        }
                                    }}>Submit</Button>
                            </Box>
                            <Typography variant='subtitle1' className='text-center'>I have an account. <Link to='/login'>Log In</Link></Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Signup
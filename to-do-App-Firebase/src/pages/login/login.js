import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Box, Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { handleLogIn } from '../../config/firebaseMethods'

function Login() {

    const navigate = useNavigate()
    // fields data push
    const [data, setData] = useState({})
    const handleChange = (event) => {
        let newInput = { [event.target.name]: event.target.value }
        setData({ ...data, ...newInput })
    }
    const handleSubmit = () => {
        handleLogIn(data.email, data.password)
            .then((userCredential) => {
                // Log in 
                const user = userCredential.user;
                navigate('/todoapp', {
                    state: {
                        user: user.uid
                    }
                })
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
                // ..
            });
    }
    // fields data push

    // Password Field
    const [values, setValues] = React.useState({
        email: '',
        password: '',
        showPassword: false
    });
    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword
        });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    // Password Field
    return (
        <>
            <Box sx={{ backgroundColor: '#457b9d' }}>
                <Grid container justifyContent='center' alignItems='center' height='100vh'>
                    <Grid item md={4} xs={10}>
                        <Box sx={{ boxShadow: '0px 0px 10px rgba(0,0,0,0.5)', p: 5, borderRadius: '10px', backgroundColor: '#fff' }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <Typography variant='h2' className='text-center'>Login</Typography>
                                <FormControl sx={{ m: 1 }} variant='outlined'>
                                    <InputLabel htmlFor='outlined-email'>Email</InputLabel>
                                    <OutlinedInput
                                        id='outlined-email'
                                        type='email'
                                        onChange={(event) => handleChange(event)}
                                        label='Email'
                                        name='email'
                                    ></OutlinedInput>
                                </FormControl>
                                <FormControl sx={{ m: 1 }} variant='outlined'>
                                    <InputLabel htmlFor='outlined-adornment-password'>Password</InputLabel>
                                    <OutlinedInput
                                        id='outlined-adornment-password'
                                        type={values.showPassword ? 'text' : 'password'}
                                        onChange={(event) => handleChange(event)}
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
                                        name='password'
                                        label='Password'
                                    ></OutlinedInput>
                                </FormControl>
                            </Box>
                            <Box sx={{
                                textAlign: 'center',
                                my: 2
                            }}>
                                <Button variant='contained'
                                    onClick={handleSubmit}
                                    sx={{
                                        backgroundColor: '#1d3557',
                                        mt: 1,
                                        '&:hover': {
                                            backgroundColor: '#457b9d'
                                        }
                                    }}>Submit</Button>
                            </Box>
                            <Typography variant='subtitle1' className='text-center'>Need an account? <Link to='/'>Sign Up</Link></Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Login
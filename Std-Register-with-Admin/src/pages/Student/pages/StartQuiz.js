import { Box, Chip, Grid, Typography } from '@mui/material'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import InfoIcon from '@mui/icons-material/Info';
import { useLocation } from 'react-router-dom';
import React from 'react'
import { useState } from 'react';

function Quiz() {

    const [indexNo, setIndexNo] = useState(0)
    const [score, setScore] = useState(0)
    const [result, setResult] = useState(false)

    const location = useLocation()
    const quizDetails = location.state.item
    const questionsArr = location.state.item.quizQues
    console.log(questionsArr);

    const correctAns = (val, ans) => {
        if (val === ans) {
            setScore(score + 1)
            setIndexNo(indexNo + 1)
        }

        else if (val !== ans) {
            setIndexNo(indexNo + 1)
        }

    }

    return (
        <>
            <Grid container justifyContent='center' minHeight="auto">
                <Grid item xs={10} md={10}>
                    <Box sx={{ backgroundColor: '#fff', p: 4, borderRadius: '5px' }}>
                        <Box className='d-flex align-items-center border-bottom mb-3'>
                            <Typography sx={{ flexGrow: 1 }} variant='span' className='fs-3 fw-bold'>{quizDetails.quizName}</Typography>
                            <Typography variant='span'><EmojiEventsIcon />{quizDetails.totalMarks}</Typography>
                        </Box>
                        {result || indexNo == questionsArr.length ? <Grid className='results'><Typography className='resultsChild' textAlign='center' variant='h3' component='h3'>Your score is {score}</Typography></Grid>
                            : (

                                <Grid container justifyContent='center' spacing={3}>
                                    <Grid item md={12}>
                                        <Typography variant="h4">{questionsArr[indexNo].question}</Typography>
                                        <Typography sx={{ fontWeight: 900, color: '#0c4b74' }} variant="subtitle1">Question {indexNo} of {questionsArr.length}</Typography>
                                    </Grid>
                                    {questionsArr[indexNo].option.map((elem, ind) => (
                                        <Grid item textAlign='center' md={6} key={ind}>
                                            <Chip
                                                onClick={() => correctAns(elem, questionsArr[indexNo].correctAns)}
                                                color='primary'
                                                label={elem}
                                                sx={{ width: '150px', height: '40px', borderRadius: '5px' }}
                                            />
                                        </Grid>
                                    ))}
                                </Grid>
                            )
                        }
                    </Box>
                </Grid>
            </Grid >

        </>
    )
}

export default Quiz 
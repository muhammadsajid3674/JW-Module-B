import { Chip, Grid, Typography, Stack, CircularProgress } from '@mui/material'
import { Box, Container } from '@mui/system'
import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { getData } from '../../../config/firebaseMethods';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.primary,
}));

function StdQuiz() {

  const [isLoading, setLoading] = useState(true)

  const [quizData, setQuizData] = useState()

  const [indexNo, setIndexNo] = useState(0)
  const [score, setScore] = useState(0)
  const [result, setResult] = useState(false)

  // Timer Start
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)

  let timer;
  // Timer End

  const correctAns = (val, ans) => {
    if (val === ans) {
      setScore(score + 1)
      setIndexNo(indexNo + 1)
    }

    else if (val !== ans) {
      setIndexNo(indexNo + 1)
    }

  }

  const getQuizQuestion = () => {
    return getData('QuizQuestions/')
      .then((res) => {
        setQuizData(res);
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
      })
  }


  useEffect(() => {
    // timer = setInterval(() => {
    //   setSeconds(seconds + 1)
    //   if (seconds === 59) {
    //     setMinutes(minutes + 1)
    //     setSeconds(0)
    //   }
    // }, 1000);
    // if (indexNo == quizData.length || minutes == 1) {
    //   clearInterval(timer)
    //   setResult(true)
    // }
    // return () => clearInterval(timer)

    getQuizQuestion()
  }, [])

  return (
    <>
      <Grid container justifyContent='center' alignItems='center' minHeight="100vh" sx={{ backgroundColor: '#eee', py: 10 }}>
        <Grid item xs={10} md={10}>
          <Box sx={{ backgroundColor: '#fff', p: 4, borderRadius: '5px' }}>
            {/* {result || indexNo == quizData.length ? <Grid className='results'><Typography className='resultsChild' textAlign='center' variant='h3' component='h3'>Your score is {score} and you complete the quiz in {minutes} Minutes and {seconds} Seconds</Typography></Grid> */}
            {isLoading ? (
              <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <CircularProgress />
              </Box>
            )
              :
              <Container>
                <Typography textAlign='center' variant='h2' component='h2'>Quiz App</Typography>
                <Grid container justifyContent='space-between' spacing={5} mt={1} mb={2}>
                  <Grid item>
                    <Typography variant='h4' component='h4'>Timer</Typography>
                    {/* <Typography textAlign='center' variant='h5' component='h5'>{minutes < 10 ? "0" + minutes : minutes}:{seconds < 10 ? "0" + seconds : seconds}</Typography> */}
                  </Grid>
                  <Grid item>
                    <Typography variant='h4' component='h4'>Score</Typography>
                    <Typography textAlign='center' variant='h5' component='h5'>{score}</Typography>
                  </Grid>
                </Grid>
                <Grid className='main' container justifyContent='center' rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                  <Box sx={{ width: 800, padding: '20px 0', textAlign: 'center' }}>
                    <Typography variant="h4">{quizData[indexNo].questions}</Typography>
                  </Box>
                  {quizData[indexNo].option.map((elem, ind) => (
                    <Grid item textAlign='center' md={6} key={ind}>
                      <Chip
                        onClick={() => correctAns(elem, quizData[indexNo].correctAnswer)}
                        color='primary'
                        label={elem}
                        sx={{ width: '150px', height: '40px', borderRadius: '5px' }}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Container>}
          </Box>
        </Grid>
      </Grid >

    </>
  )
}

export default StdQuiz
import { Delete } from '@mui/icons-material'
import { Box, Checkbox, CircularProgress, Divider, Grid, IconButton, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { MuiButton } from '../../../components/button/button'
import MuiCustomizedButtons from '../../../components/button/MuiCustomButtom'
import { FloatingInput, MuiInput } from '../../../components/input/input'
import { getData, pushData } from '../../../config/firebaseMethods'

function Quiz() {

  // const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState()
  // const [existedQues, setExistedQues] = useState()
  const [optionArr, setOptionArr] = useState([])
  const [option, setOption] = useState("")
  const [formSubmit, setFormSubmit] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const [subQuestion, setSubQuestion] = useState(false)

  const handleChange = (e) => {
    let newField = { [e.target.name]: e.target.value }
    setData({ ...data, ...newField })
  }
  const submitCreateQuiz = () => {
    setDisabled(true)
    setSubQuestion(true)
    console.log(data)
  }

  // Options
  const AddToOptionARR = () => {
    setOptionArr([option, ...optionArr])
    setOption("")
  }
  let deleteItem = (id) => {
    let listI = optionArr.filter((value, index) => {
      return index !== id
    })
    setOptionArr(listI)
  }
  // Options

  // const submitData = () => {
  //   setFormSubmit(true)
  //   alert('Do you want to Submit?')
  //   return pushData(data, 'QuizQuestions/')
  //     .then((res) => {
  //       setFormSubmit(false)
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       setFormSubmit(false)
  //       console.log(err);
  //     })
  // }

  // const getQuizQuestion = () => {
  //   return getData('QuizQuestions/')
  //     .then((res) => {
  //       setExistedQues(res);
  //       setLoading(false)
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  // }

  // useEffect(() => {
  //   getQuizQuestion()
  // }, [])


  return (
    <>
      <Grid container justifyContent='center' alignItems='center' minHeight="103.2vh" sx={{ backgroundColor: '#eee' }}>
        <Grid item xs={10} md={10}>
          <Box sx={{ backgroundColor: '#fff', p: 4, borderRadius: '5px' }}>
            <Grid container spacing={5}>
              {/* /// Create Quiz /// */}
              <Grid item md={6} sx={12}>
                <Typography variant="h3" className="pb-3">Quiz Form</Typography>
                <Grid container spacing={2}>
                  <Grid item md={6}>
                    <FloatingInput
                      label='Quiz Name'
                      labelId='quizName-float'
                      name='quizName'
                      placeholder='Quiz Name'
                      disabled={disabled}
                      onChange={(e) => handleChange(e)}
                    />
                  </Grid>
                  <Grid item md={6}>
                    <FloatingInput
                      label='Course Name'
                      labelId='CourseName-float'
                      name='CourseName'
                      placeholder='Course Name'
                      disabled={disabled}
                      onChange={(e) => handleChange(e)}
                    />
                  </Grid>
                  <Grid item md={6}>
                    <FloatingInput
                      label='Duration'
                      labelId='duration-float'
                      name='duration'
                      placeholder='Duration'
                      disabled={disabled}
                      onChange={(e) => handleChange(e)}
                    />
                  </Grid>
                  <Grid item md={6}>
                    <FloatingInput
                      label='Total Marks'
                      labelId='totalMarks-float'
                      name='totalMarks'
                      placeholder='Total Marks'
                      disabled={disabled}
                      onChange={(e) => handleChange(e)}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <MuiButton
                      label="Create Quiz"
                      onClick={submitCreateQuiz}
                      color='custom'
                    />
                  </Grid>
                </Grid>
              </Grid>
              {/* /// Submit Questions /// */ }
              {subQuestion && < Grid item md={6} sx={12}>
              <Typography variant="h3" className="pb-3">Add Questions</Typography>
              <Grid container spacing={2}>
                <Grid item md={12}>
                  <FloatingInput
                    label='Questions'
                    labelId='questions-float'
                    name='questions'
                    placeholder='Questions'
                    onChange={(e) => handleChange(e)}
                  />
                </Grid>
                <Grid item md={9}>
                  <FloatingInput
                    label='Options'
                    labelId='options-float'
                    name='options'
                    placeholder='Options'
                    onChange={(e) => setOption(e.target.value)}
                    value={option}
                  />
                  {optionArr.map((e, i) => {
                    return <Typography key={i} variant='p'>
                      <IconButton onClick={() => deleteItem(i)}>
                        <Delete />
                      </IconButton>
                      <Checkbox />
                      {e}
                      <Divider />
                    </Typography>
                  })}
                </Grid>
                {/* <Typography variant='subtitle2'>Check the Correct Answer</Typography> */}
                <Grid item md={3}>
                  <MuiButton
                    label="Add"
                    className="mt-1 fs-5"
                    color="warning"
                    onClick={AddToOptionARR}
                  />
                </Grid>
                <Grid item md={5} xs={12}>
                  <MuiButton
                    label="Submit Question"
                    onClick={submitCreateQuiz}
                    color="custom"
                  />
                </Grid>
              </Grid>
            </Grid>}
            <Grid item md={12} textAlign='end'>
              {formSubmit ? (
                <CircularProgress />
              ) : (
                <MuiButton
                  label="Submit Quiz"
                  // onClick={submitData}
                  color="success"
                />
              )}
            </Grid>
        </Grid>
      </Box>
    </Grid>
      </Grid >
  {/* {isLoading ? (
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <CircularProgress />
        </Box>
      ) : (
        <Box>
          <Typography variant="p" className="display-3">Questions List</Typography>
          <table className="table table-bordered w-90 table-striped mt-2" style={{ fontSize: '0.8rem' }}>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th>Questions</th>
                <th>Options</th>
                <th>Duration</th>
                <th>Total Marks</th>
              </tr>
            </thead>
            {existedQues.map((e, i) => {
              return <tbody key={i}>
                <tr>
                  <td scope='row'>{i}</td>
                  <td>{e.questions}</td>
                  <td>{e.option.join(', ')}</td>
                  <td>{e.duration}</td>
                  <td>{e.totalMarks}</td>
                </tr>
              </tbody>
            })}
          </table>
        </Box>
      )} */}
    </>
  )
}

export default Quiz
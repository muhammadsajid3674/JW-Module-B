import { Box, CircularProgress, FormControlLabel, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import { MuiButton } from '../../../components/button/button'
import { FloatingInput, MuiInput } from '../../../components/input/input'
import { getData, pushData } from '../../../config/firebaseMethods'

function Course() {

  const [isLoading, setLoading] = useState(true)
  const [formSubmit, setFormSubmit] = useState(false)
  const [data, setData] = useState()
  const [existedCourse, setCourse] = useState([])

  const handleChange = (e) => {
    let newField = { [e.target.name]: e.target.value }
    setData({ ...data, ...newField })
  }



  const submitData = () => {
    setFormSubmit(true)
    console.log(data)
    alert('Do you want to Submit?')
    return pushData(data, 'Courses/')
      .then((res) => {
        setFormSubmit(false)
        console.log(res);
      })
      .catch((err) => {
        setFormSubmit(false)
        console.log(err);
      })
  }

  const getCourses = () => {
    return getData('Courses/')
      .then((res) => {
        setCourse(res);
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setLoading(false)
      })
  }

  useEffect(() => {
    getCourses()
  }, [])

  return (
    <>
      <Grid container justifyContent='center' alignItems='center' minHeight="100vh" sx={{ backgroundColor: '#eee', py: 10 }}>
        <Grid item xs={10} md={10}>
          <Box sx={{ backgroundColor: '#fff', p: 4, borderRadius: '5px' }}>
            <Grid item md={10}>
              <Typography variant="p" className="display-3">Course Form</Typography>
              <Grid container className='mt-2' spacing={2}>
                <Grid item md={6}>
                  <FloatingInput
                    label='Course Name'
                    labelId='courseName-float'
                    name='courseName'
                    placeholder='Course Name'
                    onChange={(e) => handleChange(e)}
                  />
                </Grid>
                <Grid item md={6}>
                  <FloatingInput
                    label='Course Duration'
                    labelId='courseDuration-float'
                    name='courseDuration'
                    placeholder='Course Duration'
                    onChange={(e) => handleChange(e)}
                  />
                </Grid>
                <Grid item md={6}>
                  <FloatingInput
                    label='No Of Quiz'
                    labelId='noOfQuiz-float'
                    name='noOfQuiz'
                    placeholder='No Of Quiz'
                    onChange={(e) => handleChange(e)}
                  />
                </Grid>
                <Grid item md={6}>
                  <FloatingInput
                    label='Fee In Rupees'
                    labelId='feeInRupees-float'
                    name='feeInRupees'
                    placeholder='Fee In Rupees'
                    onChange={(e) => handleChange(e)}
                  />
                </Grid>
                <Grid item md={6}>
                  <FloatingInput
                    label='Lead Trainer'
                    labelId='leadTrainer-float'
                    name='leadTrainer'
                    placeholder='Lead Trainer'
                    onChange={(e) => handleChange(e)}
                  />
                </Grid>
                <Grid item md={6}>
                  <FloatingInput
                    label='Assistant Trainers'
                    labelId='assistantTrainers-float'
                    name='assistantTrainers'
                    placeholder='Assistant Trainers'
                    onChange={(e) => handleChange(e)}
                  />
                </Grid>
                <Grid item md={4}>
                  <FormControlLabel
                    control={<Checkbox/>}
                    label="Is Form Open"
                    name='isFormOpen'
                    onChange={(e) => handleChange(e)}
                  />
                </Grid>
                <Grid item md={12}>
                  {formSubmit ? (
                    <CircularProgress />
                  ) : (
                    <MuiButton
                      variant='contained'
                      label='Submit'
                      onClick={submitData}
                    />
                  )}
                </Grid>
                <Grid container justifyContent='center'>
                  <Grid item xs={10} md={12}>
                    <Box sx={{ backgroundColor: '#fff', p: 4, borderRadius: '5px' }}>
                      {isLoading ? (
                        <Box sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                          <CircularProgress />
                        </Box>
                      ) : (
                        <Box>
                          <Typography variant="p" className="display-3">Course List</Typography>
                          <table className="table table-bordered w-90 table-striped mt-2" style={{ fontSize: '0.8rem' }}>
                            <thead>
                              <tr>
                                <th scope="col">#</th>
                                <th>Course Name</th>
                                <th>Course Duration</th>
                                <th>Is Form Open</th>
                                <th>No of Quiz</th>
                                <th>Fee in Rupee</th>
                                <th>Lead Trainer</th>
                                <th>Assistant Trainer</th>
                              </tr>
                            </thead>
                            {existedCourse.map((e, i) => {
                              return <tbody key={i}>
                                <tr>
                                  <td scope='row'>{i}</td>
                                  <td>{e.courseName}</td>
                                  <td>{e.courseDuration}</td>
                                  <td>{e.isFormOpen}</td>
                                  <td>{e.noOfQuiz}</td>
                                  <td>{e.feeInRupees}</td>
                                  <td>{e.leadTrainer}</td>
                                  <td>{e.assistantTrainers}</td>
                                </tr>
                              </tbody>
                            })}
                          </table>
                        </Box>
                      )}
                    </Box>
                  </Grid>
                </Grid >
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid >



    </>
  )
}

export default Course
import { CircularProgress, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { useState } from 'react'
import { MuiButton } from '../../../components/button/button';
import { FloatingSelect } from '../../../components/Dropdown/Dropdown';
import MuiSwitch from '../../../components/Switch/MuiSwitch';

function CreateResult() {

    const [data, setData] = useState({});
    const [courseStatus, setCourseStatus] = useState(false);
    const [resultData, setResultData] = useState([
        {
            name: "ABC",
            marks: 80,
            rollNum: "ABC100",
            result: "Pass",
        },
        {
            name: "ABC",
            marks: 80,
            rollNum: "ABC101",
            result: "Pass",
        },
        {
            name: "ABC",
            marks: 80,
            rollNum: "ABC102",
            result: "Pass",
        },
        {
            name: "ABC",
            marks: 80,
            rollNum: "ABC103",
            result: "Pass",
        },
        {
            name: "ABC",
            marks: 80,
            rollNum: "ABC104",
            result: "Pass",
        },
        {
            name: "ABC",
            marks: 80,
            rollNum: "ABC105",
            result: "Pass",
        },
        {
            name: "ABC",
            marks: 80,
            rollNum: "ABC106",
            result: "Pass",
        },
        {
            name: "ABC",
            marks: 80,
            rollNum: "ABC107",
            result: "Pass",
        },
        {
            name: "ABC",
            marks: 80,
            rollNum: "ABC108",
            result: "Pass",
        },
        {
            name: "ABC",
            marks: 80,
            rollNum: "ABC109",
            result: "Pass",
        },
    ]);


    let submitForm = () => {
        data.isShowResult = courseStatus;
        data.result = resultData;
        console.log(data);
    };


    return (
        <>
            <Grid container justifyContent='center' alignItems='center' minHeight="100vh" sx={{ backgroundColor: '#eee', py: 10 }}>
                <Grid item xs={10} md={10}>
                    <Box sx={{ backgroundColor: '#fff', p: 4, borderRadius: '5px' }}>
                        <Grid item md={10}>

                            <Typography variant="p" className="display-3">Create Result</Typography>
                            <Grid container className='mt-2' spacing={2}>
                                <Grid item md={6}>
                                    <FloatingSelect
                                        label='Course'
                                        labelId='course-float'
                                        name="course"
                                        onChange={(e) => setData({ ...data, course: e.target.value })}
                                        required={true}
                                        // error={error}
                                        dataSource={[
                                            {
                                                id: 'WM',
                                                option: 'Web & Mobile App Hybrid'
                                            },
                                            {
                                                id: 'MERN',
                                                option: 'MERN Stack Developer'
                                            },
                                            {
                                                id: 'DM',
                                                option: 'Digital Marketing'
                                            },
                                        ]}
                                    />
                                </Grid>
                                <Grid item md={6}>
                                    <MuiSwitch
                                        label='Course Status'
                                        onChange={(e) => setCourseStatus(e.value.checked)}
                                    />
                                </Grid>
                                <Grid item md={12}>
                                    {/* {formSubmit ? (
                    <CircularProgress />
                  ) : ( */}
                                    <MuiButton
                                        variant='contained'
                                        label='Submit'
                                        onClick={submitForm}
                                    />
                                    {/* )} */}
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item md={6}>
                                <Typography variant="p" className="display-3">Questions List</Typography>
                                <table className="table table-bordered w-90 table-striped mt-2" style={{ fontSize: '0.8rem' }}>
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th>Name</th>
                                            <th>Marks</th>
                                            <th>Roll Num</th>
                                            <th>Result</th>
                                        </tr>
                                    </thead>
                                    {resultData.map((e, i) => {
                                        return <tbody key={i}>
                                            <tr>
                                                <td scope='row'>{i + 1}</td>
                                                <td>{e.name}</td>
                                                <td>{e.marks}</td>
                                                <td>{e.rollNum}</td>
                                                <td>{e.result}</td>
                                            </tr>
                                        </tbody>
                                    })}
                                </table>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid >
        </>
    )
}

export default CreateResult
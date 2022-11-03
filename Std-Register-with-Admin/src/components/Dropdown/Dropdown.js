import { createTheme, FormControl, InputLabel, MenuItem, Select, ThemeProvider } from '@mui/material'
import React from 'react'

const theme = createTheme({
    palette: {
        custom: {
            light: '#e76f51',
            main: '#e76f51',
            dark: '#e76f51',
            contrastText: '#fff',
        }
    },
});

function MuiSelect(props) {
    const { label, onChange, value, variant, color, name, error, fullWidth, id, labelId, dataSource, required } = props
    return (
        <>
            <ThemeProvider theme={theme}>
                <FormControl fullWidth required={required} color={color ?? 'custom'} variant={variant ?? 'standard'}>
                    <InputLabel id={labelId}>{label}</InputLabel>
                    <Select
                        variant={variant ?? 'standard'}
                        color={color ?? 'custom'}
                        labelId={labelId}
                        id={id}
                        label={label}
                        onChange={onChange}
                        name={name}
                        error={error}
                    >
                        {dataSource.map((e, i) => {
                            return <MenuItem value={e.option} key={i}>{e.option}</MenuItem>
                        })}
                    </Select>
                </FormControl>
            </ThemeProvider>
        </>
    )
}

function FloatingSelect(props) {

    const { label, onChange, value, variant, color, name, error, fullWidth, id, labelId, dataSource,disabled, required } = props

    return <div className="form-floating">
        <select className="form-select" id={labelId} onChange={onChange} name={name} disabled={disabled} aria-label="Floating label select example">
            <option defaultValue>Choose..</option>
            {dataSource.map((e, i) => {
                return <option value={e.option} key={i}>{e.option}</option>
            })}
        </select>
        <label htmlFor={labelId}>{label}</label>
    </div>
}

export { MuiSelect, FloatingSelect }
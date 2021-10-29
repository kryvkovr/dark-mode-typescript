import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Grid, Typography, Button, Paper } from '@mui/material';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Paper style={{ height: "100vh" }}>
      <Grid container direction="column">
        <Typography variant="h1">Version 3</Typography>
      </Grid>

      <Button variant="contained" color="primary">
        First button
      </Button>

      <Button variant="contained" color="secondary">
        Second
      </Button>
    </Paper>
  )
}

export default App

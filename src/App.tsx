import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import { Grid, Typography, Button, Paper } from '@mui/material';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Обновляем заголовок документа с помощью API браузера
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      alert('Your browser is ....  please turn off DARK MODE');
    }
  }, []);


  return (
    // <Paper style={{ height: "100vh"}}>
    <div>
      <Grid container direction="column">
        <Typography variant="h1">Version 5</Typography>
      </Grid>

      <Button variant="contained" color="primary">
        First button
      </Button>

      <Button variant="contained" color="secondary">
        Second
      </Button>

    </div >
  )
}

export default App

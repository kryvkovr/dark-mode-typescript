import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import { Grid, Typography, Button, Paper, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    // primary?: PaletteColorOptions;
    // secondary?: PaletteColorOptions;
    // error?: PaletteColorOptions;
    // warning?: PaletteColorOptions;
    // info?: PaletteColorOptions;
    // success?: PaletteColorOptions;
    // mode?: PaletteMode;
    // tonalOffset?: PaletteTonalOffset;
    // contrastThreshold?: number;
    // common?: Partial<CommonColors>;
    // grey?: ColorPartial;
    // text?: Partial<TypeText>;
    // divider?: string;
    // action?: Partial<TypeAction>;
    // background?: Partial<TypeBackground>;



    // primary: {
    //   main: '#dd5',
    // },
    // secondary: {
    //   main: '#66c',
    // },
  },
});

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(window.navigator);
    console.log(window.navigator.userAgent);
    const isSamsungBrowser = navigator.userAgent.indexOf('SamsungBrowser') > - 1;
    if(isSamsungBrowser){
      alert('Samsung browser')
    }
    const isMiBrowser = navigator.userAgent.indexOf('MiuiBrowser') > - 1;
    if(isMiBrowser){
      alert('MI browser')
    }
   
  }, []);


  return (
    <ThemeProvider theme={theme}>
      {/* <div className='cont'>
        lalalal
      </div> */}
      {/* <Paper style={{ height: "100vh" }}> */}

        <Grid container direction="column">
          <Typography variant="h1">Version 5</Typography>
        </Grid>

        <Button variant="contained" color="primary">
          First button
        </Button>
        <Button variant="contained" color="primary">
          First button
        </Button>


        <Button variant="contained" color="secondary">
          Second
        </Button>
      {/* </Paper> */}
    </ThemeProvider>
  )
}

export default App

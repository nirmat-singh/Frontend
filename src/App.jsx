import { useState } from 'react'
import './App.css'
import Create from './pages/Create'
import { createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme({
  typography:{
    fontFamily: 'Protest Guerrilla',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  }
})

function App() {

  return (
    <ThemeProvider theme={theme} >
      <Create />
    </ThemeProvider>
  )
}

export default App

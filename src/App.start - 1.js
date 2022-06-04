import {NetflixApp} from './components/NetflixApp'
// 🐶 importe
//import { ThemeProvider} from '@mui/styles'
//import { createTheme } from '@mui/material/styles'
import {ThemeProvider} from '@mui/styles'
import {createTheme} from '@mui/material/styles'
import {dark} from '@mui/material/styles/createPalette'

const theme = createTheme({
  palette: {
    type: 'dark',
  },
  primary: {
    main: '#111',
  },
  secondary: {
    main: '#000',
  },
})


function App() {
  return (
    // 🐶 wrappe <NetflixApp />
    <ThemeProvider theme={theme}>
      <NetflixApp />
    </ThemeProvider>
  )
}

export {App}

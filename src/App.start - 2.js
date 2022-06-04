import {NetflixApp} from './components/NetflixApp'
// 🐶 importe
//import { ThemeProvider} from '@mui/styles'
//import { createTheme } from '@mui/material/styles'
import { NetflixAppBar} from './components/NetflixAppBar'
import {ThemeProvider} from '@mui/styles'
import {createTheme} from '@mui/material/styles'
//import {dark} from '@mui/material/styles/createPalette'
import {ErrorBoundary} from 'react-error-boundary'

function ErrorFallBack({error, resetErrorBoundary}){
  return (
    <div>
      <NetflixAppBar />
      <div
        role="alert"
        style={{
          height: '100%',
          textAlign: 'center',
          margin: '100px 300px',
          color: '#fff',
        }}
      >
        <h1 style={{fontSize: '2.5em'}}>Vous cherchez votre chemin ?</h1>
        <pre style={{color: 'red', fontSize: '1em'}}>
          Erreur : {error.message}
        </pre>

        <div className="banner__buttons">
          <button
            className="banner__button banner__buttonplay"
            onClick={resetErrorBoundary}
          >
            Accueil
          </button>
        </div>
      </div>
    </div>
  )
}

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
    <ErrorBoundary FallbackComponent={ErrorFallBack} onReset={()=> {}}>
      <NetflixApp />
    </ErrorBoundary>
    </ThemeProvider>
  )
}

export {App}

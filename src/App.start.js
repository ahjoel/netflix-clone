import {NetflixApp} from './components/NetflixApp'
import {ErrorBoundary} from 'react-error-boundary'
import {ThemeProvider} from '@mui/styles'
import {createTheme} from '@mui/material/styles'
import ErrorFallback from './components/ErrorFallback'
import Error404 from './components/Error404'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {NetflixById} from './components/NetflixById.exercise'
import {NetflixMovies} from './components/NetflixMovies.exercise'
import {NetflixSeries} from './components/NetflixSeries.exercise'
import {NetflixNews} from './components/NetflixNews.exercise'
import {NetflixBookmark} from './components/NetflixBookmark.exercise'
import {NetflixSearch} from './components/NetflixSearch.exercise'

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#E50914',
    },
    secondary: {
      main: '#E50914',
    },
  },
})

function AuthApp() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Routes>
            <Route path="/" exact={true} element={<NetflixApp />}></Route>
            <Route path="/tv/:tvId" element={<NetflixById />}></Route>
            <Route path="/movie/:movieId" element={<NetflixById />}></Route>
            <Route path="/movies" element={<NetflixMovies />}></Route>
            <Route path="/series" element={<NetflixSeries />}></Route>
            <Route path="/news" element={<NetflixNews />}></Route>
            <Route path="/list" element={<NetflixBookmark />} />
            <Route path="*" element={<Error404 />}></Route>
            <Route path="/search/:query" element={<NetflixSearch />} />
          </Routes>
        </ErrorBoundary>
      </ThemeProvider>
    </Router>
  )
}

export {AuthApp}

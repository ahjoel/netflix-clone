import React from 'react'
import {NetflixAppBar} from './NetflixAppBar'
import {NetflixRow} from './NetflixRow'
import {NetFlixFooter} from './NetFlixFooter'
import {NetflixHeader} from './NetflixHeader'
import {getRandomType, getRandomId} from '../utils/helper'
import {clientApi} from '../utils/clientApi'
import {useFetchData} from '../utils/hooks'
// 🐶 importe les composants MUI
import {Alert, AlertTitle} from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import {makeStyles} from '@mui/styles'
import './Netflix.css'

// 🐶 créé un hook 'useStyles' avec 'makeStyles'
const useStyles = makeStyles(theme => ({
  alert: {
    width: '50%',
    margin: 'auto',
    marginBottom: '50px',
  },
  progress: {
    margingLeft: '30px',
  },
}))

// 📑 https://material-ui.com/styles/basics/#hook-api
// Ce hook aura deux classes :
// 1. alert
//  width: '50%',
//  margin : 'auto',
//  marginBotton:'50px'
//
// 2. progress
//  marginLeft : '30px',

const NetflixApp = () => {
  // 🐶 utilise le hook classes ='useStyles', il sera utilié plus bas
  const classes = useStyles()
  const {data: headerMovie, error, status, execute} = useFetchData()

  const [type] = React.useState(getRandomType())
  const defaultMovieId = getRandomId(type)

  // 🐶 créé un state 'status', avec la valeur par defaut 'idle'
  React.useEffect(() => {
    // 🐶 changer le status en 'fetching'
    execute(clientApi(`${type}/${defaultMovieId}`))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  // Gestion d'erreur par error boundary de facon global
  if (status === 'error') {
    throw new Error(error.message)
  }
  return (
    <div>
      <NetflixAppBar />
      <NetflixHeader movie={headerMovie?.data} type={type} />
      <NetflixRow wideImage={false} title="Films Netflix" />
      <NetflixRow wideImage={true} title="Série Netflix" />

      {/* Gestion des cas d'erreur après le useFetchData 
      {status === 'error' ? (
        <div className={classes.alert}>
          <Alert severity="error">
            <AlertTitle>Une erreur est survenue</AlertTitle>
            Detail : {error.message}
          </Alert>
        </div>
      ) : null}*/}

      {status === 'fetching' ? (
        <div className={classes.progress}>
          <CircularProgress />
        </div>
      ) : null}

      <NetFlixFooter />
    </div>
  )
}
export {NetflixApp}
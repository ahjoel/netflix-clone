import React from 'react'
import {NetflixAppBar} from './NetflixAppBar'
import {NetflixRow} from './NetflixRow'
import {NetFlixFooter} from './NetFlixFooter'
import {NetflixHeader} from './NetflixHeader'
import {getRandomType, getRandomId} from '../utils/helper'
import {clientApi} from '../utils/clientApi'
import {makeStyles} from '@mui/styles'
import {Alert, AlertTitle} from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import {useFetchData} from '../utils/hooks'
import './Netflix.css'
import {TYPE_MOVIE} from '../config'
import {TYPE_TV} from '../config'

// 🐶 Ajoute des nouveaux types de <NetflixRow /> dans le render
const useStyles = makeStyles(theme => ({
  alert: {
    width: '50%',
    margin: 'auto',
    marginBotton: '50px',
  },
  progress: {
    marginLeft: '30px',
  },
}))

const NetflixApp = () => {
  const classes = useStyles()
  const {data: headerMovie, error, status, execute} = useFetchData()
  const [type] = React.useState(getRandomType())
  const defaultMovieId = getRandomId(type)

  // Ici on ne définit pas les dépendances car il est executé par défaut une fois
  React.useEffect(() => {
    execute(clientApi(`${type}/${defaultMovieId}`))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (status === 'error') {
    // sera catché par ErrorBoundary
    throw new Error(error.message)
  }
  return (
    <div>
      <NetflixAppBar />
      <NetflixHeader movie={headerMovie?.data} type={type} />

      {/* 
      🐶 Ajoute les 'props' suivants :
        - 'watermark' à 'true'
        - 'type' à TYPE_MOVIE
        - 'filter' à 'trending'
        - 'wideImage' à 'true'
      */}
      <NetflixRow
        wideImage={true}
        watermark={true}
        type={TYPE_MOVIE}
        title="Films Netflix"
        filter="trending"
      />
      {/* 
      🐶 Ajoute les 'props' suivants :
        - 'watermark' à 'true'
        - 'type' à TYPE_TV
        - 'filter' à 'trending'
        - 'wideImage' à 'false'
      */}
      <NetflixRow
        wideImage={false}
        watermark={true}
        type={TYPE_TV}
        title="Série Netflix"
        filter="trending"
      />

      {/* 
        👨‍✈️ Hugo le chef de projet demande d'ajouter une nouvelle ligne "Les mieux notés"
        cette ligne contiendra des films avec le logo 'netflix' et les images en format large.
        🐶 ajoute un  'NetflixRow' avec les bons props
      */}
      <NetflixRow
        wideImage={true}
        watermark={true}
        type={TYPE_MOVIE}
        title="Les mieux notés"
        filter="toprated"
      />
      {/* 
        👨‍✈️ Hugo le chef de projet demande d'ajouter une nouvelle ligne "Action & aventure"
        cette ligne contiendra des series avec le logo 'netflix' et les images en format large.
        🐶 ajoute un 'NetflixRow' avec les bons props
        - l'id de genre 'Action & aventure' est le '10759'
      */}
      <NetflixRow
        wideImage={true}
        watermark={true}
        type={TYPE_TV}
        title="Action & aventure"
        filter="genre"
        param="10759"
      />
      {/* 
        👨‍✈️ Hugo le chef de projet demande d'ajouter une nouvelle ligne "Les meilleurs Thrillers"
        cette ligne contiendra des series sans le logo 'netflix' et les images en format poster.
        🐶 ajoute un 'NetflixRow' avec les bons props
        - l'id de genre 'Les meilleurs Thrillers' est le '53'
      */}
      <NetflixRow
        wideImage={true}
        watermark={true}
        type={TYPE_MOVIE}
        title="Les meilleurs Thrillers"
        filter="genre"
        param="53"
      />

      {status === 'error' ? (
        <div className={classes.alert}>
          <Alert severity="error">
            <AlertTitle>Une erreur est survenue</AlertTitle>
            Detail : {error.message}
          </Alert>
        </div>
      ) : null}

      {status === 'fetching' ? (
        <div className={classes.progress}>
          <CircularProgress />{' '}
        </div>
      ) : null}
      <NetFlixFooter color="secondary" si />
    </div>
  )
}
export {NetflixApp}
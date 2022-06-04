import React from 'react'
import {NetflixAppBar} from './NetflixAppBar'
import {NetflixRow} from './NetflixRow'
import {NetFlixFooter} from './NetFlixFooter'
import {NetflixHeader} from './NetflixHeader'
import {getRandomType, getRandomId} from '../utils/helper'
import {useMovie} from '../utils/hooksMovies.exercise'
import './Netflix.css'
import {TYPE_MOVIE} from '../config'
import {TYPE_TV} from '../config'


const NetflixApp = () => {
  const [type] = React.useState(getRandomType())
  const [defaultMovieId] = React.useState(getRandomId(type))
  const headerMovie = useMovie(type, defaultMovieId)

  
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

      <NetFlixFooter color="secondary" si />
    </div>
  )
}
export {NetflixApp}
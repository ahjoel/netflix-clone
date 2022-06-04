import React from 'react'
import {NetflixAppBar} from './NetflixAppBar'
import {NetflixRow} from './NetflixRow'
import {NetFlixFooter} from './NetFlixFooter'
import {NetflixHeader} from './NetflixHeader'
import {getRandomId} from '../utils/helper'
import { useMovie } from '../utils/hooksMovies.exercise'
import {TYPE_MOVIE, TYPE_TV} from '../config'
import './Netflix.css'


const NetflixSeries = () => {

  const type = TYPE_TV
  const [defaultMovieId] = React.useState(getRandomId(type))

  const headerMovie = useMovie(type, defaultMovieId)
  
  return (
    <div>
      <NetflixAppBar />
      <NetflixHeader movie={headerMovie?.data} type={type} />
      <NetflixRow
        wideImage={true}
        watermark={true}
        type={TYPE_TV}
        filter="trending"
        title="Serie tendances Netflix"
      />
      <NetflixRow
        wideImage={false}
        watermark={true}
        type={TYPE_TV}
        filter="toprated"
        title="Série les mieux notés"
      />

      <NetflixRow
        type={TYPE_TV}
        filter="populaire"
        title="Les séries populaires"
        watermark={true}
        wideImage={true}
      />

      <NetflixRow
        type={TYPE_TV}
        filter="genre"
        param="99"
        title="Les documentaires"
        watermark={true}
        wideImage={true}
      />

      <NetflixRow
        type={TYPE_MOVIE}
        filter="genre"
        param="80"
        title="Les séries criminelles"
        watermark={false}
        wideImage={false}
      />

      <NetFlixFooter color="secondary" si />
    </div>
  )
}
export {NetflixSeries}

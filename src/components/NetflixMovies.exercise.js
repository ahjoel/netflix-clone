import React from 'react'
import {NetflixAppBar} from './NetflixAppBar'
import {NetflixRow} from './NetflixRow'
import {NetFlixFooter} from './NetFlixFooter'
import {NetflixHeader} from './NetflixHeader'
import {getRandomId} from '../utils/helper'
import { useMovie } from '../utils/hooksMovies.exercise'
import {TYPE_MOVIE, TYPE_TV} from '../config'
import './Netflix.css'


const NetflixMovies = () => {

  const type = TYPE_MOVIE
  const [defaultMovieId] = React.useState(getRandomId(type))

  const headerMovie = useMovie(type, defaultMovieId)

  return (
    <div>
      <NetflixAppBar />
      <NetflixHeader movie={headerMovie?.data} type={type} />
      <NetflixRow
        wideImage={true}
        watermark={true}
        type={TYPE_MOVIE}
        filter="trending"
        title="Films Netflix"
      />

      <NetflixRow
        wideImage={false}
        watermark={true}
        type={TYPE_MOVIE}
        filter="toprated"
        title="Les mieux notés"
      />

      <NetflixRow
        type={TYPE_MOVIE}
        filter="populaire"
        title="Les films populaires"
        watermark={true}
        wideImage={true}
      />

      <NetflixRow
        type={TYPE_TV}
        filter="genre"
        param="80"
        title="Les films fantastiques"
        watermark={true}
        wideImage={true}
      />

      <NetflixRow
        type={TYPE_TV}
        filter="genre"
        param="55"
        title="Les films de sciences fictions"
        watermark={false}
        wideImage={false}
      />

      <NetFlixFooter color="secondary" si />
    </div>
  )
}
export {NetflixMovies}

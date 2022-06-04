import React from 'react'
import {NetflixAppBar} from './NetflixAppBar'
import {NetflixRow} from './NetflixRow'
import {NetFlixFooter} from './NetFlixFooter'
import {NetflixHeader} from './NetflixHeader'
import {useMovie} from '../utils/hooksMovies.exercise'
import {TYPE_MOVIE, TYPE_TV} from '../config'
import './Netflix.css'
import {useParams, useLocation} from 'react-router-dom'



const NetflixById = () => {
  let {tvId, movieId} = useParams()
  const location = useLocation()
  
  const [type, setType] = React.useState(
    location.pathname.includes(TYPE_TV) ? TYPE_TV : TYPE_MOVIE,
  )

  // 🐶 determine l'id en fonction du type (soit 'tvId' soit 'movieId' )
  const [id, setId] = React.useState(type === TYPE_TV ? tvId : movieId)
  
  const headerMovie = useMovie(type, id)

  
  // Ceci permettra de recharger un composant sans recharger la page grâce aux useEffect
  React.useEffect(() => {
    const type = location.pathname.includes(TYPE_TV) ? TYPE_TV : TYPE_MOVIE
    setType(type)
    setId(type === TYPE_TV ? tvId : movieId)
    
    //Permet de remonter les infos de l'icone cliqué dans le header
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [location.pathname, movieId, tvId])


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
        type={TYPE_TV}
        filter="trending"
        title="Série Netflix"
      />

      <NetflixRow
        type={TYPE_MOVIE}
        filter="toprated"
        title="Les mieux notés"
        watermark={true}
        wideImage={true}
      />

      <NetflixRow
        type={TYPE_TV}
        filter="genre"
        param="10759"
        title="Action & aventure"
        watermark={true}
        wideImage={true}
      />

      <NetflixRow
        type={TYPE_MOVIE}
        filter="genre"
        param="53"
        title="Les meilleurs Thriller"
        watermark={false}
        wideImage={false}
      />

      <NetFlixFooter color="secondary" si />
    </div>
  )
}
export {NetflixById}
